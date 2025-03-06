const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// 1. Connect to MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',          // Default XAMPP MySQL user
  password: '',          // Leave empty if you haven't set a MySQL password
  database: 'pet_care_db' 
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database.');
});

// 2. CREATE (POST): Add new appointment
app.post('/api/appointments', (req, res) => {
  const { owner_name, auto_generated_id, service, appointment_date, appointment_time } = req.body;
  
  const sql = `
    INSERT INTO appointments (owner_name, auto_generated_id, service, appointment_date, appointment_time)
    VALUES (?, ?, ?, ?, ?)
  `;
  db.query(sql, [owner_name, auto_generated_id, service, appointment_date, appointment_time], (err, result) => {
    if (err) {
      console.error('Error creating appointment:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ message: 'Appointment created', appointmentId: result.insertId });
  });
});

// 3. READ ALL (GET): Retrieve all appointments
app.get('/api/appointments', (req, res) => {
  const sql = 'SELECT * FROM appointments ORDER BY id DESC';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error reading appointments:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(200).json(results);
  });
});

// 4. READ SINGLE (GET): Retrieve one appointment by ID
app.get('/api/appointments/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM appointments WHERE id = ? LIMIT 1';
  db.query(sql, [id], (err, results) => {
    if (err) {
      console.error('Error fetching appointment:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Appointment not found' }); // Handle not found case
    }
    res.status(200).json(results[0]); // Return the single record
  });
});


// 5. UPDATE (PUT): Update a specific appointment
app.put('/api/appointments/:id', (req, res) => {
  const { id } = req.params;
  const { owner_name, auto_generated_id, service, appointment_date, appointment_time } = req.body;

  const sql = `
    UPDATE appointments
    SET owner_name = ?, auto_generated_id = ?, service = ?, appointment_date = ?, appointment_time = ?
    WHERE id = ?
  `;
  db.query(
    sql,
    [owner_name, auto_generated_id, service, appointment_date, appointment_time, id],
    (err, result) => {
      if (err) {
        console.error('Error updating appointment:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Appointment not found' });
      }
      res.status(200).json({ message: 'Appointment updated successfully' });
    }
  );
});

// 6. DELETE (DELETE): Remove a specific appointment
app.delete('/api/appointments/:id', (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM appointments WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error deleting appointment:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Appointment not found' });
    }
    res.status(200).json({ message: 'Appointment deleted successfully' });
  });
});

// 7. Start the server on port 3001 (Node backend)
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
