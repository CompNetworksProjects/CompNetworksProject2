# Computer Networking Project 2

## Overview
This project focused on **securing a web application** by integrating authentication, implementing security enhancements, optimizing performance, and deploying on a **serverless architecture** using Netlify and Firebase.

## Team Members
- **Zeba Karobi** - Final report and network analysis
- **Sebastian Geer** - Frontend development and login UI
- **Rian Merritt** - Database integration and backend communication
- **BhaskarTeja Pidugu** - Edited final report and network analysis

## Summary
### 🔹 **Technology Stack**
- **Frontend:** HTML, CSS, JavaScript, Netlify
- **Backend:** Firebase Authentication, Firestore Database, Netlify Functions
- **Security:** CSRF protection, HTTPS, authentication security
- **Performance Optimization:** Netlify CDN

### 🔹 **Key Features & Implementations**
- **Firebase Authentication:** Secure user authentication using Firebase with password hashing and storage.
- **Database Integration:** User authentication data stored in **Firestore** for authentication history and user profiles.
- **Security Enhancements:**
  - **HTTPS enforced by Netlify** for encrypted communication.
  - **CSRF protection strategies** implemented using authentication tokens.
  - **Access control policies** to restrict unauthorized database access.
- **Performance Optimization:**
  - **Netlify CDN** speeds up content delivery by caching static assets at edge locations.
  - Load times measured using **Chrome DevTools**.
- **Deployment & Serverless Architecture:**
  - Frontend deployed via **Netlify** for continuous deployment.
  - Backend logic handled via **Netlify Functions**, reducing infrastructure overhead.
- **Network Monitoring & Security Analysis:**
  - **Wireshark used** to capture Firebase authentication requests & Netlify API calls.
  - **Chrome DevTools** logs analyzed to verify Firebase API security.
  - **SSL certificate inspection** ensured HTTPS was enforced.

---

## Deployment and Final Report
- 🔗 **Live Site:** The application is deployed on **Netlify** and can be accessed [here](https://computernetworksp2.netlify.app/login.html)
- 🔗 **GitHub Repository:** [Project Repo](https://github.com/CompNetworksProjects/CompNetworksProject2)
- 🔗 **Final Report:** View full project report [here](https://github.com/CompNetworksProjects/CompNetworksProject2/blob/main/Computer%20Networks%20Project%202%20Report%20(1).pdf) 
