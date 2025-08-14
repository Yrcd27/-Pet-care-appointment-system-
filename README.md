# PawCare - Pet Care Appointment System

PawCare is a comprehensive pet care appointment management solution that includes both a web application and a desktop application. This system allows pet owners to schedule appointments for various pet care services and enables staff to manage services efficiently.

##  Project Overview

PawCare is designed to streamline the process of managing pet care services and appointments. The system consists of:

1. **Web Application** - A React-based frontend with Express.js backend for online appointment booking and management
2. **Desktop Application** - A WPF-based application for staff to manage services and track status

##  Features

### Web Application Features
- **User-friendly Interface** with intuitive navigation
- **Appointment Scheduling** for various pet care services
- **Appointment Dashboard** to view all scheduled appointments
- **CRUD Operations** for appointments (Create, Read, Update, Delete)
- **Responsive Design** for desktop and mobile devices
- **About Us** section with information about the pet care facility

### Desktop Application Features
- **Services Management** system for staff
- **Service Tracking** with status updates (Ongoing/Finished)
- **Service Categories** including:
  - Vaccination
  - Pet Grooming
  - Health Checkup
  - Pet Training
  - Pet Boarding
- **Price Management** for different services
- **Resource Person Allocation** for each service

##  Tech Stack

### Web Application
- **Frontend**:
  - React.js (v19.0.0)
  - React Router DOM (v7.1.1)
  - Axios for API requests
  - CSS for styling

- **Backend**:
  - Express.js
  - MySQL database
  - CORS middleware for cross-origin requests

### Desktop Application
- **Frontend & Backend**:
  - C# with WPF (Windows Presentation Foundation)
  - .NET 8.0
  - Entity Framework Core (v9.0.2)
  - SQLite database

##  Database Structure

### Web Application Database (MySQL)
- **appointments** table:
  - id (Primary Key)
  - owner_name
  - NIC_Number
  - service
  - appointment_date
  - appointment_time

### Desktop Application Database (SQLite)
- **Products** table (for services):
  - Id (Primary Key)
  - Name (service name)
  - Price
  - Resource_person

##  Getting Started

### Prerequisites
- Node.js and npm
- .NET 8.0 SDK
- Visual Studio (for desktop app)
- XAMPP or MySQL server (for web app backend)

### Web Application Setup

1. **Set up the database:**
   ```sql
   CREATE DATABASE pet_care_db;
   USE pet_care_db;
   
   CREATE TABLE appointments (
     id INT PRIMARY KEY AUTO_INCREMENT,
     owner_name VARCHAR(100) NOT NULL,
     NIC_Number VARCHAR(20) NOT NULL,
     service VARCHAR(50) NOT NULL,
     appointment_date DATE NOT NULL,
     appointment_time TIME NOT NULL
   );
   ```

2. **Backend setup:**
   ```bash
   cd yasiru/Backend
   npm install
   node index.js
   ```

3. **Frontend setup:**
   ```bash
   cd yasiru/Frontend
   npm install
   npm start
   ```

### Desktop Application Setup

1. **Open the solution file:**
   ```
   PawCareApp_WPF/WpdfAppDb/WpdfAppDb.sln
   ```

2. **Update database connection string:**
   - Open `ServicesDbContext.cs` and update the SQLite connection string to match your local path.

3. **Run the application:**
   - Press F5 in Visual Studio or click "Start" to run the application

##  Application Flow

### Web Application Flow
1. User navigates to the home page
2. User can view services or make an appointment
3. User fills out the appointment form (owner name, NIC number, service, date, time)
4. User can view or manage their appointments on the dashboard page
5. Admin can view all appointments, edit, or delete them

### Desktop Application Flow
1. Staff logs into the desktop application
2. Staff can view all services on the dashboard
3. Staff can add new services or update existing ones
4. Staff can mark service status as "Ongoing" or "Finished"
5. Staff can delete services when no longer needed

##  Contributors

- [Yrcd27](https://github.com/Yrcd27) - Project Owner

##  License

This project is proprietary software - all rights reserved.

---

*PawCare - Your pet's health and happiness is our priority!*
