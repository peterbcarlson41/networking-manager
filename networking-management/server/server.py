from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/networking-contacts')

def contacts():
    return {"contacts": ["John Doe", "Jane Doe"]}

if __name__ == '__main__':
    app.run(port=8000, debug=True)