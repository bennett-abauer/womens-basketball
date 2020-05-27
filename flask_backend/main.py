from flask import Flask, render_template, request
import os

from common import database_access

app = Flask(__name__, template_folder="../build", static_folder="../build/static")

app.config["SECRET_KEY"] = "super secret key"
app.config["SITE"] = "http://127.0.0.1:5000/"
app.config["DEBUG"] = True

@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def catch_all(path):
    """ This is a catch all that is required for react-router """
    return render_template("index.html")

@app.route("/viewRecruits", methods=["POST"])
def viewRecruits():
    return database_access.all_recruit_info()

@app.route("/schoolTableView", methods=["POST"])
def schoolTableView():
    return database_access.school_info()

@app.route("/updateRecruit", methods=["POST"])
def updateRecruit():
    data = request.get_json()
    database_access.update_recruit(data)
    return "recruit data updated"

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="127.0.0.1", port=port)