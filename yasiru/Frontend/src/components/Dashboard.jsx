// src/components/Dashboard.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // for navigation

function Dashboard() {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  const fetchAppointments = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/appointments");
      setAppointments(response.data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
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
    if (!window.confirm("Are you sure you want to delete this appointment?")) return;
    try {
      await axios.delete(`http://localhost:3001/api/appointments/${id}`);
      fetchAppointments();
    } catch (error) {
      console.error("Error deleting appointment:", error);
      alert("Failed to delete appointment");
    }
  };

  // Instead of prompt, navigate to a separate Update Form
  const handleEdit = (id) => {
    console.log("Editing appointment ID:", id);
    navigate(`/UpdateApp/${id}`); // Route to update page
    

  };

  return (
    <section id="Dashboard">
      <div className="Dashboard" style={{ margin: "20px", marginTop: "50px" }}>
        <h1 style={{ textAlign: "center", fontSize: "35px" }}>Appointments Dashboard</h1>
        <table
          border="2"
          cellPadding="10"
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "center",
            borderRadius: "20px",
          }}
        >
          <thead style={{ backgroundColor: "#ff6f3c", color: "white" }}>
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
                  <td>{appt.NIC_Number}</td>
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
                    >
                      Edit
                    </button>
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
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Dashboard;
