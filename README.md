
## 🌟 AutoIntern — AI-powered Internship Application Automation

**AutoIntern** is an AI-powered platform that automates internship applications, making the process fast, smart, and effortless. With seamless form submissions and intelligent job role matching, AutoIntern helps users apply to multiple internships on **Internshala** with minimal effort.  

---

### ✨ **Features**

#### 🚀 **Frontend**
Built using **Vite** and **Tailwind CSS** for blazing-fast performance and modern design. The platform has three main pages:

1. **Hero Page** (`/`)  
   - A visually appealing landing page with animations and cards explaining the AI-powered automation process.  
   - A **Get Started** button that navigates users to the form page.  

2. **Form Page** (`/main`)  
   - Collects user details like **email, password, job role, and cover letter**.  
   - On submission, sends data to the backend and shows a **loading spinner** until processing is complete.  
   - If successful, navigates to the final success page.  

3. **Success Page** (`/final`)  
   - Displays a **“Successfully Applied”** message with a clean design.  
   - Includes options to **Apply Again** or visit the application link.  
   - Protected from direct access — can only be reached after a successful form submission.  

---

#### 🔥 **Backend**
Built with **Node.js** and **Express.js**, ensuring secure and efficient handling of user data:

- **Security:** Implements **Helmet.js** for added HTTP security.  
- **Cross-Origin Requests:** Enabled using **CORS**.  
- **Body Parsing:** Uses `express.json()` and `body-parser` to handle JSON data.  
- **Routes:**
  - `POST /apply`: Receives user data (email, password, role, letter), validates inputs, and processes the application through an automated Puppeteer bot.  
  - `GET /`: Basic test route to check if the server is running.  

---

### 🧠 **Tech Stack**
**Frontend:** Vite, React.js, Tailwind CSS  
**Backend:** Node.js, Express.js, Puppeteer.js  
**Security:** Helmet.js, CORS  
**API:** Internshala Automation (via Puppeteer)  

---

### 🔒 **How It Works**

1. **User Flow:**  
   - Users land on the **Hero Page** → click **Get Started** → fill out the form on **Main Page** → data is sent to the backend → on success, users are taken to the **Success Page**.  
   
2. **Automation Flow:**  
   - The backend processes form data using **Puppeteer** to log in to **Internshala** and submit applications automatically.  
   - The app only allows navigation to `/final` if the form submission is successful — users cannot access it directly through the browser.  

---

### 🏃 **Getting Started**

**1. Clone the repository:**

```bash
git clone https://github.com/your-username/AutoIntern.git
cd AutoIntern
```

**2. Install dependencies:**

```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

**3. Run the application:**

- **Frontend:**  
```bash
npm run dev
```

- **Backend:**  
```bash
node server.js
```

The app will run at:  
- **Frontend:** `http://localhost:5173`  
- **Backend:** `http://localhost:3000`  

---

### 🚨 **Contributing**

Feel free to contribute by adding new features, improving design, or optimizing the bot automation process!  

---

### 📧 **Contact**

For any queries or suggestions, drop me a message at [raja@gmail.com].  


