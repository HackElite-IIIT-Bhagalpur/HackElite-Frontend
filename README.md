# 🚀 HackElite Website

    Cyber Official Club Website, HackElite, Indian Institute of Information Technology, Bhagalpur

    Labs, Cyber Contents, Red Teaming, Blue Teaming, Practical Hands-on


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


