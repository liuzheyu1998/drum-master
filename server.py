from flask import Flask
from flask import render_template, redirect
from flask import Response, request, jsonify
app = Flask(__name__)

data = {
    "1":{
        "id": "1", 
        "audio": "/static/crash_cymbal.mp3", 
        "answer":[7],

    },
    "2":{
        "id": "2", 
        "audio": "/static/crash_cymbal.mp3", 
        "answer":[6]
    },
    "3":{
        "id": "3", 
        "audio": "/static/crash_cymbal.mp3", 
        "answer":[4]
    },
    "4":{
        "id": "4", 
        "audio": "/static/crash_cymbal.mp3", 
        "answer":[0,1,2,3]
    },
    "5":{
        "id": "5", 
        "audio": "/static/crash_cymbal.mp3", 
        "answer":[1,2,3]
    }
}
score = {"score":0}
answer = []
correct_answer = [[1],[0],[1,2],[1],[3]]
isCorrect = {
    "1": "0",
    "2": "0",
    "3": "0",
    "4": "0",
    "5": "0",

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
    if id == "1":
        # score["score"] = 0
        answer.clear()
    

    return render_template('quiz.html', data=data[id], score=score) 

@app.route('/quizresult/<id>')
def quizresult(id=None):
    #pass in the array of answer.
    return render_template('quizAnswer.html', data=data[id], score=score,) 

@app.route('/quizfeedback')
def quizFeedback():
    #Need to do some comparison over here
    return render_template('quizFeedback.html', score=score,  isCorrect=isCorrect) 

@app.route('/submitAnswer', methods = ['GET', 'POST'])
def submitAnswer():
    json_data = request.get_json()   
    print("this is data",json_data)
    answer.append(json_data["answer"])
    print(answer)
    # score["score"] = json_data["score"]
    # isCorrect[json_data["id"]] = json_data["correct"]
    # print(isCorrect)
    return {"h": 123}

if __name__ == '__main__':
   app.run(debug = True)




