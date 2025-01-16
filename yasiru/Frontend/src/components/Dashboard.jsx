// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/appointments');
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const formatDateTime = (isoDateTime) => {
    const dateObj = new Date(isoDateTime);
    const formattedDate = dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    const formattedTime = dateObj.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return { formattedDate, formattedTime };
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this appointment?')) return;
    try {
      await axios.delete(`http://localhost:3001/api/appointments/${id}`);
      // Refresh the list
      fetchAppointments();
    } catch (error) {
      console.error('Error deleting appointment:', error);
      alert('Failed to delete appointment');
    }
  };

  // Example: simple “Edit” via prompt, or do a dedicated edit form
  const handleEdit = async (id) => {
    const newOwnerName = prompt('Enter new owner name:');
    const newAutoGenId = prompt('Enter new auto-generated ID:');
    const newService = prompt('Enter new service:');
    const newDate = prompt('Enter new date (YYYY-MM-DD):');
    const newTime = prompt('Enter new time (HH:MM):');

    if (!newOwnerName || !newAutoGenId || !newService || !newDate || !newTime) {
      alert('All fields are required.');
      return;
    }

    try {
      await axios.put(`http://localhost:3001/api/appointments/${id}`, {
        owner_name: newOwnerName,
        auto_generated_id: newAutoGenId,
        service: newService,
        appointment_date: newDate,
        appointment_time: newTime,
      });
      fetchAppointments();
    } catch (error) {
      console.error('Error updating appointment:', error);
      alert('Failed to update appointment');
    }
  };

  return (
    <section id = "Dashboard">
    <div className = "Dashboard">
    <div className = "Dashboard-table" style={{ margin: '20px' , marginTop: '100px' }}>
      <h2>Appointments Dashboard</h2>
      <table border="2" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse", textAlign: "center", borderRadius:'20px'}}>
        <thead style={{ backgroundColor: "#ff6f3c" , color: "white" }}>
          <tr>
            <th>ID</th>
            <th>Owner Name</th>
            <th>NIC Number</th>
            <th>Service</th>
            <th>Date</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appt) => {
            const { formattedDate, formattedTime } = formatDateTime(appt.appointment_date);
            return (
              <tr key={appt.id}>
                <td>{appt.id}</td>
                <td>{appt.owner_name}</td>
                <td>{appt.auto_generated_id}</td>
                <td>{appt.service}</td>
                <td>{formattedDate}</td>
                <td>{formattedTime}</td>
                <td style={{ justifyContent: "center", gap: "10px" }}>
                <button 
                  onClick={() => handleEdit(appt.id)}
                  style={{
                        backgroundColor: "#4CAF50", // Green
                        color: "white",
                        border: "none",
                        padding: "5px 10px",
                        marginRight: "2px",
                        cursor: "pointer",
                        borderRadius: "4px",
                        }}
                        >Edit</button>
                <button 
                  onClick={() => handleDelete(appt.id)}
                  style={{
                        backgroundColor: "#f44336", // Red
                        color: "white",
                        border: "none",
                        padding: "5px 10px",
                        cursor: "pointer",
                        marginLeft: "2px",
                        borderRadius: "4px",
                        }}
                        >Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </div>
    </section>
   
  );
}

export default Dashboard;
