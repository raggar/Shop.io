# Shop.io

## Image Gallery 

![Sign in](https://user-images.githubusercontent.com/35639417/104136244-e9d6c900-5362-11eb-9aea-fbe670f9e1ef.png)
![Shop](https://user-images.githubusercontent.com/35639417/104136245-e9d6c900-5362-11eb-940b-d41e30203d26.png)
![Upload](https://user-images.githubusercontent.com/35639417/104136246-ea6f5f80-5362-11eb-87cc-5224e5b5ba9c.png)
![Checkout](https://user-images.githubusercontent.com/35639417/104136243-e93e3280-5362-11eb-817b-5abbb2bd64fb.png)
![Payment](https://user-images.githubusercontent.com/35639417/104136242-e93e3280-5362-11eb-8d08-0b7e09d13d89.png)

## Project Description

Shop.io is an online clothing store equipped with full ecommerce functionality. Users start by either logging in or registering an account in order to use the service. They are then directed to the main page where they can search and browse for items they wish to buy. Each item listed on the site is community submitted, meaning that anybody with a valid account can add to the marketplace. For those looking to simply make a purchase, they can add items to their cart and checkout once ready. After entering in valid payment information, users receive an email recapping their order and confirm their purchasing.

## Features 

- Account registration and authentication (JWT Tokens and Password Hashing)
- Able to persistently add items to one's cart
- Ability to delete and update items in the marketplace
- Session persistence (local storage and apollo-cache) 
- User checkout (Stripe) and email confirmations (Mail Trap)

## How to run the application

1. Install Node.js from the https://nodejs.org/en/
2. Clone the project by running `$git clone https://github.com/RahulAggarwal1016/Chatter.git`
3. Cd and run the command `npm i` in the backend folder to install all the required dependencies and packages (listed below) 
4. Run `npm run dev` to initiate the backend server (should open at http:/localhost:4444)
5. Cd and run the command `npm i` in the frontend folder to install all the required dependencies and packages (listed below) 
6. Run `npm run dev` to initiate the client side application (should open at http://localhost:7777)
7. You're all done!

## Technologies and Services Used 

- **Frontend:** Next.js, React, Apollo-client, Cloudinary, Mail Trap
- **Backend:** Node.js, Express.js (GraphQL-Yoga), GraphQL, Prisma
