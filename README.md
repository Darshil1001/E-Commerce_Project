# E-Commerce Project

**Student Name**: Darshil Nimeshbhai Patel  
**Student Number**: 8961286  
**Date**: 21-07-2024

### Technology Stack

**Frontend**: Angular  
**Backend**: SpringBoot  
**Database**: PostgreSQL

### Database Schema Design
![Database Schema](https://github.com/user-attachments/assets/5df5daba-0612-4daa-8d60-3fa6af58bbc9)

### GitHub Link
https://github.com/Darshil1001/E-Commerce_Project

### Steps for setting up the Front-End part
1) Download ecommerce-frontend folder from the GitHub provided
2) Install Node.js and npm on your machine (Link - https://nodejs.org/en) 
3) Install Angular CLI - (Command - npm install -g @angular/cli)
4) Now, open the downloaded folder in the VsCode
5) Set the path from the terminal to your folder if not
6) Install all the dependencies using npm install
7) Finally run the project using the command - ng serve (Note: Before that, the backend part should be set and run first)

### Steps for setting up the Back-End part
1) Download EcommerceProject folder from the GitHub provided
2) Download Spring Tool Suite(STS) for eclipse from https://spring.io/tools
3) Install STS and give the workspace path
4) Now, import EcommerceProject in STS - Choose General/Existing Projects into workspace when asked and then choose the downloaded folder
5) Run the project as Spring Boot App (Note: Before that, database part should be set up)
6) Now, run the frontend part using ng serve and open URL - http://localhost:4200/

### Steps for setting up the Database
1) Download and Install pgAdmin from https://www.pgadmin.org/download/
2) Launch pgAdmin
3) When you launch pgAdmin for the first time, you will see a dashboard with no servers listed
4) Click on the "Add New Server" button to create a new server connection
5) Enter password root if you want to give another password then it's fine just need to change the password in the spring-boot open application.properties in EcommerceProject
6) If asked for username enter - postgres. The same goes with this if you want to change follow the above step
7) Now, save the server connection and connect to the server
8) Last step, create a new database with the name - ecommerce if you want to change then follow the 5th step guidelines

### Finally Run the Projects Step by Step
1) First, Run the back-end part open project and run it as Spring Boot App
2) Then run the front-end part open project and run the - ng serve command in the terminal
3) Open the given URL - http://localhost:4200/
