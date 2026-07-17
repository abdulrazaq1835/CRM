# LeadFlow CRM

A modern, full-stack CRM landing page built with React and Express, designed to capture and manage product inquiries from potential clients. Features a clean, responsive UI with a functional contact/inquiry form connected to a MongoDB-backed REST API.

🔗 **Live Demo:** [https://crm-58oq.vercel.app](https://crm-58oq.vercel.app)
🔗 **Backend API:** [https://crm-ebon-seven-82.vercel.app](https://crm-ebon-seven-82.vercel.app)

---

## ✨ Features

- Responsive marketing landing page (Hero, Features, Pricing, Testimonials, FAQ, Contact)
- Product inquiry form with live validation and toast notifications
- RESTful backend API with MongoDB persistence
- Fully deployed on Vercel (frontend + backend), independent of each other
- Environment-based configuration for seamless local + production usage

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS
- Axios
- React Toastify
- Lucide React (icons)

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- CORS
- dotenv

**Deployment**
- Vercel (Frontend + Backend, serverless functions)
- MongoDB Atlas

---

## 📁 Project Structure

```
crm-project/
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── api.js
│   │   ├── components/
│   │   │   ├── Contact.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ...
│   │   └── App.jsx
│   ├── .env.development
│   ├── .env.production
│   ├── vite.config.js
│   └── package.json
│
└── backend/
    ├── config/
    │   └── db.js
    ├── models/
    │   └── Inquiry.js
    ├── routes/
    │   └── inquiry.routes.js
    ├── server.js
    ├── vercel.json
    └── package.json
```

---

## 🚀 Getting Started (Local Development)

### Prerequisites
- Node.js (v18+)
- npm or yarn
- A MongoDB Atlas cluster (or local MongoDB instance)

### 1. Clone the repositories

```bash
git clone https://github.com/your-username/crm-frontend.git
git clone https://github.com/your-username/crm-backend.git
```

### 2. Backend setup

```bash
cd crm-backend
npm install
```

Create a `.env` file in the backend root:

```env
PORT=8000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<dbname>?appName=Cluster0
```

Run the server:

```bash
npm run dev
```

Backend will run at `http://localhost:8000`

### 3. Frontend setup

```bash
cd crm-frontend
npm install
```

Create a `.env.development` file in the frontend root:

```env
VITE_API_URL=http://localhost:8000/api
```

Run the dev server:

```bash
npm run dev
```

Frontend will run at `http://localhost:5173`

---

## 🌐 Deployment (Vercel)

Both frontend and backend are deployed independently on Vercel.

### Backend
- Root directory: `backend/`
- Entry point: `server.js`
- Environment Variables (set in Vercel dashboard):
  - `MONGO_URI`
- Production URL: `https://crm-ebon-seven-82.vercel.app`

### Frontend
- Root directory: `frontend/`
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Environment Variables (set in Vercel dashboard):
  - `VITE_API_URL=https://crm-ebon-seven-82.vercel.app/api`
- Production URL: `https://crm-58oq.vercel.app`

> ⚠️ **Note:** Always use the stable Vercel **production domain** (found under *Settings → Domains*) for CORS and API configuration — not the random per-deployment preview URLs, which change on every deploy.

---

## 🔌 API Endpoints

| Method | Endpoint            | Description                     |
|--------|----------------------|----------------------------------|
| GET    | `/api/inquiry`       | Fetch all submitted inquiries    |
| POST   | `/api/inquiry`       | Submit a new product inquiry     |

**Sample POST body:**
```json
{
  "fullName": "John Doe",
  "companyName": "ABC Pvt Ltd",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "country": "India",
  "industry": "Technology",
  "companySize": "1-10 Employees",
  "message": "Interested in your CRM solution."
}
```

---

## 🔒 CORS Configuration

The backend restricts cross-origin requests to trusted origins:



---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

Built with React, Express, and MongoDB — deployed entirely on Vercel's serverless platform.