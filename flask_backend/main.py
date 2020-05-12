from flask import Flask, render_template
import os

app = Flask(__name__, template_folder="../build", static_folder="../build/static")

app.config["SECRET_KEY"] = "super secret key"
app.config["SITE"] = "http://0.0.0.0:5000/"
app.config["DEBUG"] = True

@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def catch_all(path):
    """ This is a catch all that is required for react-router """
    return render_template("index.html")

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)