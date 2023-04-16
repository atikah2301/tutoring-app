from flask import Flask

app = Flask(__name__)


# by default the methods variable is 'GET' but it is worth being explicit
@app.route('/maths', methods = ['GET'])
def get_answer():
    return {"Q1": 1234}


if __name__ == "__main__":
    app.run(debug=True)
