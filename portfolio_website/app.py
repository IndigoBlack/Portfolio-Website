from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/contact')
def contact():
    return render_template("contact.html")

@app.route('/projects')
def projects():
    projects = [
        {
            "name": "Wiki Summariser",
            "description": """This program improves Wikipedia research by allowing you to input a topic, select a relevant article, and
            receive a concise summary of the article's key points, all while providing a link to the full article for further reading.""",
            "url": "https://github.com/IndigoBlack/Personal-creations/blob/main/wiki_summarizer.py"
        },
        {
            "name": "Pokedex",
            "description": """This web-based Pokedex demonstrates practical web development skills, including API integration,
            frontend design, and JavaScript programming. By fetching data from the PokeAPI and creating an interactive user interface,
            this project showcases the ability to build functional and engaging web applications. Note the Pokemon can take a while to load""",
            "url": "https://github.com/IndigoBlack/Displayed-projects/blob/main/script.js"
        },
        {
            "name": "Portfolio Website",
            "description": """A portfolio website consisting of all the projects I 
            completed and uploaded to a public repository. This is the website""",
            "url": "https://github.com/IndigoBlack/Portfolio-Website"
        },
    ]
    return render_template("projects.html", projects=projects)

if __name__ == '__main__':
    app.run(debug=True, reload=True)
