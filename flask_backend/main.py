from flask import Flask, render_template, request
import json
import psycopg2 as pg2
from psycopg2.extras import RealDictCursor
import os

CONN = pg2.connect(database="basketball-recruitment", user="postgres", password=9206)
CUR = CONN.cursor(cursor_factory=RealDictCursor)

app = Flask(__name__, template_folder="../build", static_folder="../build/static")

app.config["SECRET_KEY"] = "super secret key"
app.config["SITE"] = "http://0.0.0.0:5000/"
app.config["DEBUG"] = True

@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def catch_all(path):
    """ This is a catch all that is required for react-router """
    return render_template("index.html")

@app.route("/viewRecruits", methods=["POST"])
def viewRecruits():
    query_sql = '''SELECT last_name, first_name, address, phone_number, email FROM recruits;'''
    CUR.execute(query_sql)
    results = CUR.fetchall()

    return json.dumps(results)

if __name__ == "__main__":
#    viewRecruits()
    port = int(os.environ.get("PORT", 5000))
    app.run(host="127.0.0.1", port=port)