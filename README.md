# MERN Employee Management System

A full-stack web application for managing employee records built with the MERN stack (MongoDB, Express.js, React, Node.js).

## 🚀 Features

- **View Employee Records**: Display all employee information in a clean, responsive table
- **Add New Employees**: Create new employee records with name, position, and level
- **Edit Existing Records**: Update employee information
- **Delete Records**: Remove employee records from the database
- **Responsive Design**: Modern UI built with Tailwind CSS
- **RESTful API**: Backend API with full CRUD operations

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks and functional components
- **React Router** - Client-side routing
- **Tailwind CSS v4** - Utility-first CSS framework
- **Vite** - Fast build tool and development server

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **MongoDB Atlas** - Cloud database service

## 📁 Project Structure

```
MERN/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/         # Static assets (logo, etc.)
│   │   ├── components/     # React components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Record.jsx
│   │   │   └── RecordList.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── vite.config.js
├── server/                 # Express backend
│   ├── db/
│   │   └── connection.js   # MongoDB connection
│   ├── routes/
│   │   └── record.js       # API routes
│   ├── config.env          # Environment variables
│   ├── server.js           # Main server file
│   └── package.json
└── README.md
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the server directory and add your MongoDB connection string:
   ```
   ATLAS_URI=your_mongodb_atlas_connection_string
   PORT=5050
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Open a new terminal and navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/records` | Get all employee records |
| GET | `/records/:id` | Get a single employee record |
| POST | `/records` | Create a new employee record |
| PATCH | `/records/:id` | Update an employee record |
| DELETE | `/records/:id` | Delete an employee record |

### Request/Response Examples

**Create Employee:**
```json
POST /records
{
  "name": "John Doe",
  "position": "Software Engineer",
  "level": "Senior"
}
```

**Response:**
```json
{
  "acknowledged": true,
  "insertedId": "507f1f77bcf86cd799439011"
}
```

## 🎨 UI Components

### Navbar
- Logo display
- Navigation to home page
- "Create Employee" button

### RecordList
- Table displaying all employees
- Edit and Delete actions for each record
- Responsive design

### Record
- Form for creating/editing employee records
- Input validation
- Navigation after successful submission

## 🔒 Environment Variables

Create a `config.env` file in the server directory:

```env
ATLAS_URI=mongodb+srv://username:password@cluster.mongodb.net/database
PORT=5050
```

## 🚀 Deployment

### Backend Deployment
1. Set up environment variables on your hosting platform
2. Deploy to services like Heroku, Railway, or Vercel
3. Ensure MongoDB Atlas allows connections from your deployment IP

### Frontend Deployment
1. Build the production version:
   ```bash
   npm run build
   ```
2. Deploy the `dist` folder to services like Netlify, Vercel, or GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 📞 Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

Built with ❤️ using the MERN stack