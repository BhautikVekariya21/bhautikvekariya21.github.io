# Bhautik Vekariya — Personal Portfolio Website

A sleek, premium, and fully responsive personal portfolio designed to showcase software development projects, machine learning applications (MLOps), graphic design artwork, and professional experiences.

🚀 **Live Site:** [bhautikvekariya21.github.io](https://bhautikvekariya21.github.io/)

---

## 🛠️ Tech Stack & Design Architecture

- **Frontend Core:** React 19, TypeScript, Vite (ultra-fast compilation and HMR)
- **Styling & Theme:** Tailwind CSS (fully customized dark-mode aesthetic with refined typography and micro-animations)
- **Animation Engine:** React Spring + Motion (smooth interactive page transitions and custom physical scroll effects)
- **Integrations:** EmailJS (automated transactional visitor notifications with premium HTML layouts)
- **Deployment Platform:** Vercel (CI/CD pipeline with build-time environment variables)

---

## ✨ Features

- **Interactive Gallery:** Includes detailed screenshots of live projects (like the Air Quality Index Predictor).
- **Graphic Design Showcase:** An image gallery displaying custom graphic design and digital illustrations.
- **Enterprise-Grade Contact Form:**
  - Integrated with **EmailJS** to directly deliver messages to email.
  - Custom-styled notification and auto-reply templates (Stripe/Linear style).
  - Modern inline status messages instead of outdated browser alerts.
- **Professional Timeline:** Responsive experience showcase mapping software engineering positions.

---

## ⚙️ Local Setup and Configuration

### 1. Prerequisites
Ensure you have **Node.js** installed on your system.

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/BhautikVekariya21/port.git
cd port
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory and add your EmailJS configuration keys:
```env
VITE_EMAIL_SERVICE_ID=your_emailjs_service_id
VITE_EMAIL_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAIL_USER_ID=your_emailjs_public_key
```

### 4. Running the Development Server
Start the local server:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser to view the application.

---

## 📦 Build & Deployment

### Production Build
Generate a production-ready bundle:
```bash
npm run build
```

### Vercel Deployment
Deploy to Vercel instantly using the Vercel CLI:
```bash
vercel --prod
```
