# 🌟 Motivational Quote Generator

A simple and clean motivational quote generator built with **Next.js**, **Tailwind CSS**, and **ShadCN UI**.

Users can enter a topic (like `life` or `success`) and get 3 motivational quotes related to that topic — all pulled from a local JSON file.

---

## 🚀 Features

- 🔍 Enter a topic and generate 3 relevant quotes
- 💅 Beautiful UI with ShadCN components
- 💨 Fully responsive and styled using Tailwind CSS
- 🧠 Local JSON-based quote library
- ☁️ Deployable via Vercel in 1 click

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCN UI](https://ui.shadcn.com/)
- TypeScript (optional)

---

## 🧑‍💻 Getting Started

🔹 1. Clone the Repository

git clone https://github.com/Mariam-04/nextjs-quote-generator.git
cd nextjs-quote-generator

🔹2. Install Dependencies**

pnpm install
# or use npm install or yarn install

🔹3. Run the Development Server

pnpm dev
# or npm run dev

📁 Folder Structure
.
├── components/        # UI components (Input, Button, Card, etc.)
├── lib/quotes.ts      # Static quotes array
├── app/page.tsx       # Main quote generator logic
├── app/layout.tsx     # Root layout with fonts, background, and floating badge
├── styles/            # Tailwind + global styles (globals.css)
