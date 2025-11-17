# Astrolozee Frontend (React + Vite)

React frontend application for Astrolozee - AI-powered astrology platform with personalized consultations and Kundli generation.

## 🚀 Deployment to Netlify

### Prerequisites
- GitHub account
- Netlify account (free tier available)
- Backend API deployed at: `https://astroger-be.onrender.com`

### Quick Deploy Steps

1. **Push to GitHub** (if not done already)
   ```bash
   git add -A
   git commit -m "Prepare for Netlify deployment"
   git push origin main
   ```

2. **Deploy on Netlify**
   - Go to [Netlify Dashboard](https://app.netlify.com/)
   - Click **"Add new site"** → **"Import an existing project"**
   - Choose **"GitHub"** → Select **`msmahatha/Astrologer-frontend`**
   - Netlify auto-detects settings from `netlify.toml`
   - Add environment variables (see below)
   - Click **"Deploy site"**

3. **Environment Variables** (Add in Netlify dashboard)
   ```
   VITE_API_BASE_URL = https://astroger-be.onrender.com
   VITE_GOOGLE_CLIENT_ID = 73941981725-cog2oe9hkdpgtgandpvr1998iu6pghea.apps.googleusercontent.com
   ```

4. **Update Backend CORS**
   After deployment, add your Netlify URL to backend CORS in `Astrolozee-BE/index.js`

## 🛠️ Local Development

```bash
npm install
cp .env.example .env
# Edit .env with your values
npm run dev
```

## 📦 Tech Stack

- React 19.1.1 + Vite 7.1.2
- Tailwind CSS 4.1.13
- Zustand (State Management)
- React Router DOM 7.9.0
- Axios + Google OAuth

## 🎨 Key Features

- ✅ AI astrology consultations with RAG
- ✅ Personalized user name in greetings
- ✅ Kundli generation
- ✅ Google OAuth + Email authentication
- ✅ Responsive design
- ✅ Real-time chat with typing indicators

## 🔗 API Endpoints Used

- `POST /api/auth/login` - User login
- `POST /api/auth/signup` - Registration
- `POST /api/astro/ask` - AI consultation
- `POST /api/kundli/generate` - Kundli generation

## 🐛 Troubleshooting

**Backend not responding:**
- Verify VITE_API_BASE_URL points to deployed backend
- Check backend CORS includes your Netlify URL

**Build fails:**
- Run `rm -rf node_modules && npm install`
- Ensure Node.js version is 20.x

**Env vars not working:**
- Must prefix with `VITE_`
- Restart dev server after changes

## 📄 License

ISC
