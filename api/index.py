from flask import Flask, request, jsonify


app = Flask(__name__)

@app.route("/api/python")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route("/api/translate")
def translate_text():
    return "<p>translating this!</p>"

@app.route("/api/echo", methods=["POST"])
def echo_data():
    data = request.get_json()
    if not data:
        return {"error": "No data provided"}, 400
    return jsonify(data), 200

if __name__ == "__main__":
    app.run()


# curl -X POST http://localhost:3000/api/echo -H "Content-Type: application/json" -d '{"key": "value"}'

# curl -X POST http://localhost:5000/api/echo -H "Content-Type: application/json" -d '{"key": "value"}'
