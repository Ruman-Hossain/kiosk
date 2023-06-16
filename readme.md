# Kiosk eCommerce Website

> eCommerce platform built with the MERN stack & Redux.

## Paypal Account to Make Payment while Placing Order
*Account Name* client-ruman@personal.example.com [Personal]

## Click to View [Deployed URL Link](https://kiosk-i1os.onrender.com/)


## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

## Usage

- Create a MongoDB database and obtain your `MongoDB URI` - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
- Create a PayPal account and obtain your `Client ID` - [PayPal Developer](https://developer.paypal.com/)

### Env Variables

Rename the `.env.example` file to `.env` and add the following

```
NODE_ENV=development
PORT=5000
MONGO_URI="mongodb+srv://learnmongo:learnmongo@learnmongo.b6ij2g4.mongodb.net/ecommerce"
PAYPAL_CLIENT_ID=ASYPV4crc8uoB2fJGb5WCmR1suJeP_xMaKc4Y1ysSfK0ehubf2ivZeXSqVwyUw_ziz0hOG9KJRfAd8kJ
JWT_SECRET=DOEKMCODKEOMCDOO39398503FK4R04KF04KF0
PAGINATION_LIMIT=8
```

Change the JWT_SECRET and PAGINATION_LIMIT to what you want

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```

# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

ruman.cse.brur@email.com (Admin)
Ostad@2023

fivup.expert@gmail.com (Customer)
Ostad@2023
```
# kiosk
