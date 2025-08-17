# 🚀 cyber-page

A fast, minimal React + Vite starter focused on modern frontend dev: Tailwind CSS + DaisyUI for styling, Zustand for state management, React Router for routing, and Axios for HTTP.
---
## Quick start

```bash
# clone
git clone https://github.com/your-username/cyber-page.git
cd cyber-page

# install
npm install

# dev server
npm run dev

.env
VITE_API_BASE_URL=https://api.example.com
VITE_APP_TITLE=Cyber Page



Project structure
cyber-page/
├── public/                 # static assets (favicons, robots, etc.)
├── src/
│   ├── assets/             # images/fonts
│   ├── components/         # reusable UI components (Button, Card, Navbar)
│   ├── features/           # domain-specific logic (e.g., auth, projects)
│   ├── pages/              # route-level components (Home, About, Contact)
│   ├── routes/             # routing definitions
│   ├── store/              # zustand stores
│   ├── styles/             # tailwind base files (index.css)
│   ├── utils/              # helpers, api client (axios instance)
│   ├── App.jsx             # app root
│   └── main.jsx            # entry: react-dom render + router + provider
├── .eslintrc.cjs
├── tailwind.config.cjs
├── postcss.config.cjs
├── vite.config.js
├── package.json
└── README.md

Dependencies (as in package.json):

react, react-dom — UI library.
vite — build/dev tool (fast).
tailwindcss, @tailwindcss/vite — Tailwind integration with Vite.
daisyui — component plugin on top of Tailwind.
zustand — minimal global state management.
react-router-dom — routing.
axios — HTTP client.
react-icons — icon library.
tailwind-scrollbar-hide — helper plugin for hiding scrollbars.


DevDependencies:

@vitejs/plugin-react — react plugin for vite (fast refresh).
eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh — linting and hook rules.
postcss, autoprefixer — for Tailwind processing.
Type definitions: @types/react, @types/react-dom.


