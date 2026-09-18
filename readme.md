# React Portfolio Website with Express Backend

This repository contains an updated full-stack implementation of the React Portfolio Website. The client-side static project data and contact submission logic have been migrated to a dedicated Node.js/Express API service operating from the `/server` folder.

---

##  Features & Architecture

### Backend (Express API)
- **Port & Environment Configuration**: Dynamically reads configuration parameters (`PORT`, `CLIENT_ORIGIN`) using `dotenv`.
- **REST Endpoints**: Serves project data dynamically and accepts incoming contact form submissions.
- **In-Memory Storage**: Handles contact form persistent data per session.
- **Data Validation**: Enforces input validation on mandatory contact form fields and email syntax.
- **CORS Support**: Configured to permit requests originating from the React dev server.
- **Centralized Error Handling**: Catch-all middle-tier for handling 404s and unhandled server errors gracefully without returning HTML or stack traces.

### Frontend (React Integration)
- **Asynchronous Data Fetching**: Utilizes `useEffect` and standard `fetch` calls to consume API data.
- **State Management**: Implements loading states and visual error boundaries across views.
- **Dynamic Routing**: Deep-link support for `/projects/:projectId` with dynamic backend fetching.
- **Contact Form Submission**: Async POST request submission with real-time field reset and feedback messaging.

---

AI Disclaimer: Artificial intelligence was utilized as an assistance tool during the preparation of this project to refine, format, and review the README documentation, ensuring it is written in clear, professional, and grammatically accurate English.

- Screen Recording link: https://drive.google.com/file/d/1SXJ08k3CEEm8iSQhFC06XQBfMHD9k5bP/view?usp=sharing
- Curl commands(testing of api endpoints in backend):https://docs.google.com/document/d/1L7X7J6SQzrqrh_01DeWeycgzFUzrfWLw5GcBJVKRhls/edit?usp=sharing
