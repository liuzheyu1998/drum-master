from flask import Flask
from flask import render_template, redirect
from flask import Response, request, jsonify
app = Flask(__name__)

data = {
    "1":{
        "id": "1", 
        "audio": "/static/crash_cymbal.mp3", 
        "answer":[0,1,2,3]
    },
    "2":{
        "id": "2", 
        "audio": "/static/crash_cymbal.mp3", 
        "answer":[1,2,3]
    },
    "3":{
        "id": "3", 
        "audio": "/static/crash_cymbal.mp3", 
        "answer":[1,2,3]
    },
    "4":{
        "id": "4", 
        "audio": "/static/crash_cymbal.mp3", 
        "answer":[1,2,3]
    },
    "5":{
        "id": "5", 
        "audio": "/static/crash_cymbal.mp3", 
        "answer":[1,2,3]
    }
}
score = {"score":0}
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
    print(score)

    return render_template('quiz.html', data=data[id], score=score) 

@app.route('/quizresult/<id>')
def quizresult(id=None):
    return render_template('quizresult.html', data=data[id], score=score) 

@app.route('/submitAnswer', methods = ['GET', 'POST'])
def submitAnswer():
    json_data = request.get_json()   
    print(json_data)
    score["score"] = json_data["score"]
    return {"h": 123}

if __name__ == '__main__':
   app.run(debug = True)




