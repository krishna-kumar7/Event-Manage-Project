⚙️ Setup Instructions
🔧 Prerequisites

    Node.js and npm

    MySQL with XAMPP or similar

    React.js CLI

🔌 Backend Setup

cd server-side
npm install
npm start

    MySQL database must be running

    Add .env file for DB credentials (optional)

    Upload folder must exist: /uploads

💻 Frontend Setup

cd client
npm install
npm start

📦 API Endpoints
🧍 Users

    POST /api/users/signup

    POST /api/users/login

    GET /api/users/:id

    PUT /api/users/:id

🎪 Events

    GET /api/events

    GET /api/events?category=party|seminar|meetup

    POST /api/events

    PUT /api/events/:id

    DELETE /api/events/:id

📆 Bookings

    POST /api/bookings

    GET /api/bookings/:userId

    DELETE /api/bookings/:id

    GET /api/bookings/all (Admin)

📸 Screenshots

    (Add screenshots of home page, client profile, booking confirmation, admin dashboard)

🙌 Contributors

    Krishna Kumar Mahto
    Ashutosh Kumar
    Pappu Kumar

📃 License

This project is licensed under the MIT License.
