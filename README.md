# emergency-financial-hotspot
"Hackathon project for Emergency Financial Hotspot for Cashless Transactions"



Our platform integrates a unique feature that can be incorporated into existing digital payment systems like Google Pay and Paytm, enabling secure offline peer-to-peer (P2P) transactions. This solution is ideal for emergency situations or areas with limited internet connectivity. By utilizing Bluetooth, NFC, and mesh network technologies, users can carry out financial transactions without requiring an active internet connection. Once reconnected, all transaction data is synchronized with Vultr's cloud infrastructure, ensuring smooth reconciliation.

Website User Flow:

Home Page: Welcomes users and introduces them to the platform.


Authentication Page: Users sign in to access their account.


Wallet Creation Page:
Users enter personal details (e.g., name, bank account number).

Upload ID and profile photo.

Select their preferred payment method.

Wallet ID Generation: A unique 12-digit wallet ID is generated for the user.

The user receives a confirmation message on their registered phone number.

An option is provided to download the mobile app (APK) for offline transactions.




# Basic Environment Setup

Node.js: Make sure Node.js is installed on your machine. You can download it from `nodejs.org`.

MongoDB: You’ll need a MongoDB instance. 

You can:
Install MongoDB locally or use a cloud-hosted MongoDB service like MongoDB Atlas.
To install locally: `MongoDB Installation`.


### Project Structure
The project will have both frontend and backend components, structured as follows:
```bush
 /project
 ├── /backend
 │   ├── /models        // MongoDB schemas
 │   ├── /controllers   // Business logic
 │   ├── /routes        // API routes
 │   └── server.js      // Express.js server setup
 ├── /frontend
 │   ├── /assets        // Static files like images, CSS
 │   ├── /js            // JavaScript files for frontend interactions
 │   ├── index.html     // Home page
 │   ├── auth.html      // Authentication page
 │   └── wallet.html    // Wallet creation page
 ├── package.json       // Node.js dependencies
 └── README.md          // Project documentation
```

## Backend Setup (Node.js with Express and MongoDB)


Initialize  Node.js project: In your project folder,

 run:
 ```bush
 npm init -y
```

This will create a `package.json` file for Project.

### Install required dependencies:

```bush
npm install express mongoose crypto body-parser cors
```

### Create Backend Structure:
```bash
/backend
├── /models (For MongoDB schemas)
├── /routes (For API routes)
├── /controllers (To handle business logic)
└── server.js (Main entry point)
```
