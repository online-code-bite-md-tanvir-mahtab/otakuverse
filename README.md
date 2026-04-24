# OtakuVerse

The Social OS for Anime & Manga Fans — Neo-Manga Maximalism landing page built with Flask.

## Local Development

```bash
pip install -r requirements.txt
python app.py
# → http://127.0.0.1:5000
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo
4. Vercel auto-detects `vercel.json` — just click **Deploy**

No extra config needed. Done.

## Project Structure

```
otakuverse/
├── api/
│   └── index.py          ← Vercel serverless entry point
├── templates/
│   └── index.html        ← Landing page
├── static/
│   ├── css/style.css
│   └── js/main.js
├── app.py                ← Local dev entry point
├── vercel.json           ← Vercel config
├── requirements.txt
└── .gitignore
```
