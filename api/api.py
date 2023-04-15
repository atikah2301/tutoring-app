from flask import Flask, jsonify

app = Flask(__name__)


# by default the methods variable is 'GET' but it is worth being explicit
@app.route('/', methods = ['GET'])
def get_json():
    return jsonify({"Atikah": 1234})


if __name__ == "__main__":
    app.run(debug=True)
