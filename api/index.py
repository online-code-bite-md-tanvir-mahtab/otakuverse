import sys
import os

# Make sure templates/ and static/ resolve relative to project root
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from flask import Flask, render_template

# Point Flask to root-level templates and static folders
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

app = Flask(
    __name__,
    template_folder=os.path.join(ROOT, "templates"),
    static_folder=os.path.join(ROOT, "static"),
    static_url_path="/static",
)

@app.route("/")
def home():
    return render_template("index.html")

# Vercel calls the app object directly
# (no `if __name__ == "__main__"` block needed)
