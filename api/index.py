from flask import Flask, request, jsonify
# from flask_cors import CORS
from api.silly import silly
from api.jcz import transliterate
# Rest of your Flask app code...

app = Flask(__name__)
# CORS(app)

@app.route("/api/python")
def hello_world():
    return "<p>Hello, World!</p>"



@app.route("/api/silly")
def s():
    text = silly.sillyFunction()
    return  f"<p>{text}</p>"

@app.route("/api/dumb-jcz")
def translate_text():
    s = transliterate.pipe_transliterator("咁都係果啲嘢㗎啦，廿鯪蚊個餐又湯又剩唔通有得你食天九翅咩？求求其其有啲肉有啲菜蛋白質澱粉質撈撈埋埋打個白汁茄汁黑椒汁咁撐得你懵口懵面咪纍返去返工返學返廠返寫字樓囉。唔係你估真係搵餐晏仔咁簡單啊。咁跟飯定跟意粉啊？")
    return f'<p>{s}</p>'


@app.route("/api/translate", methods=["POST"])
def translate_jcz():
    text_to_translate = request.json.get("text")
    translated_text = transliterate.pipe_transliterator(text_to_translate)
    return jsonify({"translatedText": translated_text})


# curl -X POST http://localhost:5328/api/translate \
# -H "Content-Type: application/json" \
# -d '{"text": "咁都係果啲嘢㗎啦，廿鯪蚊個餐又湯又剩唔通有得你食天九翅咩？求求其其有啲肉有啲菜蛋白質澱粉質撈撈埋埋打個白汁茄汁黑椒汁咁撐得你懵口懵面咪纍返去返工返學返廠返寫字樓囉。唔係你估真係搵餐晏仔咁簡單啊。咁跟飯定跟意粉啊？"}'




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
