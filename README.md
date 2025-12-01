# Komorebi Main Site

![Project Status](https://img.shields.io/badge/status-active-success.svg) #working under process
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)

## 📖 About

**Komorebi** is a modern web application built for Manga Community. Developed using React and TypeScript with Vite as the build tool, this project serves as a robust platform for AI-driven interactions and services.

"Komorebi" (木漏れ日) is the Japanese word for sunlight filtering through the leaves of trees—symbolizing the clarity and insight this application aims to provide through its AI capabilities.

### ✨ Key Features

-   **🤖 AI Integration:** Seamless integration with Google's Gemini API for advanced natural language processing and generative capabilities.
-   **⚡ Fast Performance:** Built on **Vite** for lightning-fast HMR (Hot Module Replacement) and optimized builds.
-   **🛡️ Type Safety:** Fully typed with **TypeScript** for robust code and fewer runtime errors.
-   **🧩 Modular Architecture:** Clean separation of concerns with dedicated folders for `components`, `services`, and `types`.

## 🛠️ Tech Stack

-   **Frontend:** [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **AI Model:** [Google Gemini API](https://deepmind.google/technologies/gemini/)
-   **Package Manager:** npm

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Ensure you have the following installed:
-   **Node.js** (v18 or higher recommended)
-   **npm** (usually comes with Node.js)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/ajaykumarreddy-k/Komorebi-MainSite.git](https://github.com/ajaykumarreddy-k/Komorebi-MainSite.git)
    cd Komorebi-MainSite
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Setup:**
    Create a `.env.local` file in the root directory of the project. Add your Google Gemini API key:
    ```env
    VITE_GEMINI_API_KEY=your_actual_api_key_here
    ```
    *(Note: Ensure the variable name matches what is used in `constants.ts` or your service files. Common patterns are `VITE_GEMINI_API_KEY` or just `GEMINI_API_KEY` if configured directly).*

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  **Open the app:**
    Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

## 📂 Project Structure

```text
Komorebi-MainSite/
├── src/                # (Assumed source folder)
│   ├── components/     # Reusable UI components
│   ├── services/       # API services (Gemini integration logic)
│   ├── types.ts        # TypeScript type definitions
│   ├── constants.ts    # Global constants and config
│   ├── App.tsx         # Main application component
│   └── index.tsx       # Entry point
├── public/             # Static assets
├── .env.local          # Environment variables (Git-ignored)
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
