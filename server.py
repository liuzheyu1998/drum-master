from flask import Flask
from flask import render_template, redirect
from flask import Response, request, jsonify
app = Flask(__name__)

DRUM_KIT = {
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

QUIZ = {
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
    # delete
    # "5": {
    #     "id": "5",
    #     "audio_path": "/static/audio_quiz/quiz5.mp3",
    #     "answer": [4, 4, 5, 5, 6, 6, 7, 7, 2]
    # }
}


LEARN_INPUT = {}    # {id: [time1, time2, ...]}

@app.route('/learn', methods=["GET", "POST"])
def learn(id=None):
    global DRUM_KIT
    global DRUM_PLAYED
    global LEARN_INPUT

    if request.method == "GET":
        return render_template('learn.html', drum_kit=DRUM_KIT) 
    if request.method == "POST":
        
        input = request.get_json()   # {"id": id, "time": }
        id = input["id"]
        if id in LEARN_INPUT:
            LEARN_INPUT[input["id"]].append(input["time"])
        else:
            LEARN_INPUT[input["id"]] = [input["time"]]
    
    return jsonify(LEARN_INPUT)
    

# @app.route('/edit/<id>')
# def edit_data(id=None):
#     return render_template('edit.html', data=data[id]) 


@app.route('/')
def welcome():
    return render_template('welcome.html')   

@app.route('/quiz/<id>')
def quiz(id=None):
    return render_template('quiz.html', drum_kit=DRUM_KIT) 



if __name__ == '__main__':
   app.run(debug = True)




