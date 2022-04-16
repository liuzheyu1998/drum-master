from flask import Flask
from flask import render_template, redirect
from flask import Response, request, jsonify
app = Flask(__name__)

# data = {
#     "1":{
#         "id": "1", 
#         "audio": "/static/crash_cymbal.mp3", 
#         "answer":[7],

#     },
#     "2":{
#         "id": "2", 
#         "audio": "/static/crash_cymbal.mp3", 
#         "answer":[6]
#     },
#     "3":{
#         "id": "3", 
#         "audio": "/static/crash_cymbal.mp3", 
#         "answer":[4]
#     },
#     "4":{
#         "id": "4", 
#         "audio": "/static/crash_cymbal.mp3", 
#         "answer":[0,1,2,3]
#     },
#     "5":{
#         "id": "5", 
#         "audio": "/static/crash_cymbal.mp3", 
#         "answer":[1,2,3]
#     }
# }

drum_kit = {
    "1": {
        "id": "1",
        "name": "hi_hat",
        "audio_path": "/static/audio_drum/hi_hat.mov"
    },
    "2": {
        "id": "2",
        "name": "crash1",
        "audio_path": "/static/audio_drum/crash1.mov"
    },
    "3": {
        "id": "3",
        "name": "crash2",
        "audio_path": "/static/audio_drum/crash2.mov"
    },
    "4": {
        "id": "4",
        "name": "snare_drum",
        "audio_path": "/static/audio_drum/snare_drum.mov"
    },
    "5": {
        "id": "5",
        "name": "hi_tom",
        "audio_path": "/static/audio_drum/hi_tom.mov"
    },
    "6": {
        "id": "6",
        "name": "mid_tom",
        "audio_path": "/static/audio_drum/mid_tom.mov"
    },
    "7": {
        "id": "7",
        "name": "low_tom",
        "audio_path": "/static/audio_drum/low_tom.mov"
    },
    "8": {
        "id": "8",
        "name": "bass_drum",
        "audio_path": "/static/audio_drum/bass_drum.mov"
    }
}

quiz = {
    "1": {
        "id": "1",
        "audio_path": "/static/audio_quiz/quiz1.mp3",
        "answer": [4]
    },
    "2": {
        "id": "2",
        "audio_path": "/static/audio_quiz/quiz2.mp3",
        "answer": [3]
    },
    "3": {
        "id": "3",
        "audio_path": "/static/audio_quiz/quiz3.mp3",
        "answer": [1, 1, 4, 1]
    },
    "4": {
        "id": "4",
        "audio_path": "/static/audio_quiz/quiz4.mp3",
        "answer": [8, 4, 8, 8, 4]
    },
    "5": {
        "id": "5",
        "audio_path": "/static/audio_quiz/quiz5.mp3",
        "answer": [4, 4, 5, 5, 6, 6, 7, 7, 2]
    }
}
score = {"score":0}
answer = []
correct_answer = [[1],[1],[1,2],[1],[3]]
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
    

    #return render_template('quiz.html', data=data[id], score=score) 
    return render_template('quiz.html', drum_kit = drum_kit) 

@app.route('/quizresult/<id>')
def quizresult(id=None):
    #pass in the array of answer.
    return render_template('quizAnswer.html', data=data[id], score=score,) 

@app.route('/quizfeedback')
def quizFeedback():
    #Need to do some comparison over here
    score = 0
    for i in range(len(answer)):
        if answer[i] == correct_answer[i]:
            score += 1
            index = i+1
            isCorrect[str(index)] = 1
    print("This is scoooore!",score)
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




