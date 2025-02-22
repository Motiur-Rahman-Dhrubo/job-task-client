# Y.task 📝 ⏳ 📅

### Welcome to Y.task !!!

**Y.task** is a **Task Management Application** where users can add, edit, delete, and categorize tasks into three sections: To-Do, In Progress, and Done. The application features a clean, minimalistic UI and ensures data persistence using a backend API. It is fully responsive and designed for both desktop and mobile users.

## 🔗 Live Links:

- https://job-task-50885.web.app
- https://job-task-50885.firebaseapp.com

## 📦 Dependencies:

The following dependencies are used in this project:

- "@tanstack/react-query": "^5.66.9",
- "axios": "^1.7.9",
- "firebase": "^11.3.1",
- "localforage": "^1.10.0",
- "lottie-react": "^2.4.1",
- "match-sorter": "^8.0.0",
- "react": "^19.0.0",
- "react-dom": "^19.0.0",
- "react-icons": "^5.5.0",
- "react-router-dom": "^7.2.0",
- "sort-by": "^1.2.0",
- "sweetalert2": "^11.17.2"

## 🛠️ Setup & Installation:

Follow these steps to run the project locally:

### 1️⃣ Clone the Repository:

```
git clone https://github.com/Motiur-Rahman-Dhrubo/job-task-client
cd job-task-client
```

### 2️⃣ Install Dependencies:

```
npm install
```

### 3️⃣ Set Up Environment Variables:

- Create a .env.local file in the root directory.
- Add the following variables:

```
VITE_apiKey=AIzaSyB3VCEdaXt0g2Bo501QllI2d_gy7iOhKBQ
VITE_authDomain=job-task-50885.firebaseapp.com
VITE_projectId=job-task-50885
VITE_storageBucket=job-task-50885.firebasestorage.app
VITE_messagingSenderId=928479132145
VITE_appId=1:928479132145:web:c497eb12c3fde6fb9aac50
```

### 4️⃣ Run the development server:

```
npm run dev
```
or
```
yarn dev
```

This will start the project at http://localhost:5173/

## 🛠️ Technologies Used:

The project is built using the following technologies:

- Frontend Library: React.js
- State Management: React Query
- Routing: React Router DOM
- UI Frameworks & Styling: Tailwind CSS, DaisyUI
- Backend Communication: Axios
- Animations: Lottie React
- Authentication: Firebase
- Alerts & Notifications: SweetAlert2
- Build Tool: Vite

## 📌 Core Features:

✅ Add new tasks <br>
✅ Edit tasks <br>
✅ Delete tasks <br>
✅ Categorize tasks into different sections <br>
✅ API with RESTful endpoints <br>
✅ Persistent data storage using MongoDB