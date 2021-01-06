# Shop.io

## Project Description

Shop.io is an online clothing store equipped with full ecommerce functionality. For example, users start by either logging in or regsitering an account in order to use the service. They are then directed to the main page where they can search and browse for items they wish to buy. Each item listed on the site is community submitted, meaning that anybody with a valid account can add to the market place. For those looking, to simply make a purchase they can add items to their cart and checkout once ready. After entering in valid payment information (verified by Stripe), users recieve an email recapping their order and confirm their purchasing (all orders will be displayed on the "orders  page). 

## Features 

- Account registration and authentication (JWT Tokens and Password Hashing)
- Adding items to users cart
- Session persistence (local storage and apollo-cache) 
- Ability to reset passwords
- User checkout (Stripe) and email confirmations (Mail Trap)

## Technologies and Services Used 

- Frontend: Next.js, React, Apollo-client, Cloudinary, Mail Trap
- Backend: Node.js, Express.js (GraphQL-Yoga), GraphQL, Prisma

## External Packages - Frontend

- "apollo-boost": "^0.1.16",
- "apollo-client": "^2.4.2",
- "babel-core": "^7.0.0-bridge.0",
- "babel-plugin-styled-components": "^1.7.1",
- "date-fns": "^2.0.0-alpha.7",
- "downshift": "^2.2.3",
- "enzyme": "^3.6.0",
- "enzyme-adapter-react-16": "^1.5.0",
- "graphql": "^14.0.2",
- "graphql-tag": "^2.9.2",
- "lodash.debounce": "^4.0.8",
- "next": "^7.0.0",
- "next-with-apollo": "^3.1.3",
- "nprogress": "^0.2.0",
- "prop-types": "^15.6.2",
- "react": "^16.5.2",
- "react-adopt": "^0.6.0",
- "react-apollo": "^2.2.1",
- "react-dom": "^16.5.2",
- "react-stripe-checkout": "^2.6.3",
- "react-transition-group": "^2.5.0",
- "styled-components": "^3.4.9",
- "waait": "^1.0.2"

## External Packages - Backend

- "bcryptjs": "2.4.3",
- "cookie-parser": "^1.4.3",
- "dotenv": "6.0.0",
- "graphql": "^0.13.2",
- "graphql-cli": "^2.16.7",
- "graphql-yoga": "1.16.2",
- "jsonwebtoken": "8.3.0",
- "nodemailer": "^4.6.8",
- "nodemon": "^1.18.7",
- "npm-run-all": "^4.1.5",
- "prisma": "1.17.1",
- "prisma-binding": "2.1.6",
- "stripe": "^6.12.1"
