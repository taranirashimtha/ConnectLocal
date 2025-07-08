Connect Local
Connect Local is a full-stack web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. The platform facilitates booking local service providers such as barbers, plumbers, tailors, and milk vendors. It offers user-friendly interfaces for both customers and service providers, along with robust backend functionalities to manage bookings, user data, and communications.

The live project Links userspage-https://connect-local-frontendnew.onrender.com/ admin page- https://connect-local-adminnew.onrender.com/

Features
User Registration & Authentication: Users can sign up, log in, and manage their profiles.
Product Management: Service providers can add and manage services/products.
Image Uploads: Service providers can upload images for their services.
Cart Functionality: Users can add services/products to their cart and manage them.
Booking Services: Users can book local service providers directly from the platform.
Communication Integration: Integrated with Twilio for sending SMS notifications.
Admin Panel: A dedicated admin panel for managing users, services, and bookings.
Popular Service Providers Display: Showcases popular providers in various categories.
Tech Stack
Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT (JSON Web Token)
Communication: Twilio API for SMS services
File Uploads: Multer for handling image uploads
Installation
Prerequisites
Node.js
MongoDB
NPM or Yarn
Setup
Clone the repository:

git clone https://github.com/your-username/connect-local.git
cd connect-local
Install dependencies:

cd frontend
npm install
cd ../backend
npm install
Set up environment variables:

Create a .env file in the root of the backend folder and add your configuration:

MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
TWILIO_ACCOUNT_SID=your-twilio-account-sid
TWILIO_AUTH_TOKEN=your-twilio-auth-token
Run the application:

Backend:

cd backend
npm start
Frontend:

cd frontend
npm start
Access the application:

Open your browser and go to http://localhost:3000.

Usage
User Registration & Login
-start: go to backend folder and start the backend first using command "node index.js" and then got to frontend folder and start the frontend using the command "npm start"

Sign Up: Register as a new user with basic details.
Login: Authenticate using email and password.
Booking Services
Browse through the list of available services.
Add desired services to your cart.
Proceed to book the services.
Admin Panel
-start- got o admin apnel and run run admin panel using the command "npm run dev"

Access the admin panel to manage users, services, and bookings.
Communication
Receive booking confirmations and notifications via SMS.
API Endpoints
User Authentication
POST /signup: Register a new user.
POST /login: Authenticate and log in a user.
Product Management
POST /addproduct: Add a new product/service.
POST /removeproduct: Remove an existing product/service.
GET /allproducts: Fetch all available products/services.
Cart Management
POST /addtocart: Add a product/service to the user's cart.
POST /getcart: Retrieve the user's cart data.
Popular Service Providers
GET /popularplumber: Get popular plumbers.
