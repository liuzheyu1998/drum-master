from flask import Flask
from flask import render_template, redirect
from flask import Response, request, jsonify
app = Flask(__name__)

data = {
    "1":{
        "id": "1", 
        "audio": "/static/crash_cymbal.mp3", 
        "answer":[1,2,3]
    }
}
@app.route('/learn')
def learn(id=None):
    return render_template('learn.html') 

# @app.route('/edit/<id>')
# def edit_data(id=None):
#     return render_template('edit.html', data=data[id]) 


@app.route('/')
def welcome():
    return render_template('welcome.html')   

@app.route('/quiz/<id>')
def quiz(id=None):
    return render_template('quiz.html', data=data[id]) 



if __name__ == '__main__':
   app.run(debug = True)




