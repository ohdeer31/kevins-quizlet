var startButton = document.querySelector("#startButton");
var timerElement = document.querySelector("#timeLeft");
var state = document.querySelector("#datastate");
var viewHighscores = document.querySelector("#viewHighscores");
var backBtn = document.querySelector("#backBtn");
var dataFormEl = document.querySelector("#dataForm");
var nameInputEl = document.querySelector("#nickName");
var listEl = document.querySelector("#list");

var question1 = "Which of the following keywords is used to define a variable in Javascript?";
var question2 = "How can a datatype be declared to be a constant type?";
var question3 = "When an operator’s value is NULL, the typeof returned by the unary operator is:";
var question4 = "Which function is used to serialize an object into a JSON string in Javascript?";
var question5 = "How to stop an interval timer in Javascript?";

var q1choices = ["var", "let", "Both var and let", "none of the above"];
var q2choices = ["const", "var", "let", "constant"];
var q3choices = ["boolean", "undefined", "object", "integer"];
var q4choices = ["stringify()", "parse()", "convert()", "none of the above"];
var q5choices = ["intervalOver", "clearTimer", "clearInterval", "non of the above"];

var allquestions = [question1, question2, question3, question4, question5];
var timer;
var isWin = false;
var index = 0;
var timestart = 75;

document.getElementById("viewHighscores").classList.remove("hidden");

function mainView() {
    document.getElementById("putQuizHere");

    startButton.addEventListener("click", startquiz);
}

mainView();

function startquiz() {
    startTimer();
    startQ1();
}

function startTimer() {
    timer = setInterval(function() {
        timerElement.textContent = timestart;
        if (state !== 0) {
            timestart--;
        }
        if (timestart < 0) {
            clearInterval(timer);
            document.getElementById("messageHere2").textContent = "Game Over!";
            // document.getElementById("showGame").textContent = "";
            document.getElementById("viewHighscores").classList.remove("hidden");
        }
    }, 1000);
}

function highScores() {
    window.location.href = "./showscores.html";
    alert(timestart);
}


function startQ1() {
    document.getElementById("viewHighscores").classList.add("hidden");
    document.getElementById("containerQ1").classList.remove("hidden");
    
    document.getElementById("putQuizHere").textContent = allquestions[0];
    document.getElementById("Q1putChoice1Here").innerHTML = q1choices[0];
    document.getElementById("Q1putChoice2Here").innerHTML = q1choices[1];
    document.getElementById("Q1putChoice3Here").innerHTML = q1choices[2];
    document.getElementById("Q1putChoice4Here").innerHTML = q1choices[3];

    var putChoice1Here = document.querySelector("#Q1putChoice1Here");
    var putChoice2Here = document.querySelector("#Q1putChoice2Here");
    var putChoice3Here = document.querySelector("#Q1putChoice3Here");
    var putChoice4Here = document.querySelector("#Q1putChoice4Here");
    
    putChoice3Here.addEventListener("click", function() {
        function show() {
            document.getElementById("alertHere").textContent = "Correct!";
            setTimeout(hide, 1000);
        }
        function hide() {
            document.getElementById("alertHere").textContent = "";
        }
        show();
        startQ2();
    })
    putChoice1Here.addEventListener("click", function() {
        function show() {
            document.getElementById("alertHere").textContent = "Try Again!";
            setTimeout(hide, 1000);
            timestart = timestart - 5;
        }
        function hide() {
            document.getElementById("alertHere").textContent = "";
        }
        show();
    })
    putChoice2Here.addEventListener("click", function() {
        function show() {
            document.getElementById("alertHere").textContent = "Try Again!";
            setTimeout(hide, 1000);
            timestart = timestart - 5;
        }
        function hide() {
            document.getElementById("alertHere").textContent = "";
        }
        show();
    })
    putChoice4Here.addEventListener("click", function() {
        function show() {
            document.getElementById("alertHere").textContent = "Try Again!";
            setTimeout(hide, 1000);
            timestart = timestart - 5;
        }
        function hide() {
            document.getElementById("alertHere").textContent = "";
        }
        show();
    })
}

function startQ2 () {  
    document.getElementById("containerQ2").classList.remove("hidden");
    document.getElementById("containerQ1").classList.add("hidden");
    
    document.getElementById("putQuizHere").textContent = allquestions[1];
    document.getElementById("Q2putChoice1Here").innerHTML = q2choices[0];
    document.getElementById("Q2putChoice2Here").innerHTML = q2choices[1];
    document.getElementById("Q2putChoice3Here").innerHTML = q2choices[2];
    document.getElementById("Q2putChoice4Here").innerHTML = q2choices[3];
    var putChoice1Here = document.querySelector("#Q2putChoice1Here");
    var putChoice2Here = document.querySelector("#Q2putChoice2Here");
    var putChoice3Here = document.querySelector("#Q2putChoice3Here");
    var putChoice4Here = document.querySelector("#Q2putChoice4Here");

    putChoice1Here.addEventListener("click", function() {
        function show() {
            document.getElementById("alertHere").textContent = "Correct!";
            setTimeout(hide, 1000);
        }
        function hide() {
            document.getElementById("alertHere").textContent = "";
        }
        show();
        startQ3();
    })
    putChoice2Here.addEventListener("click", function() {
        function show() {
            document.getElementById("alertHere").textContent = "Try Again!";
            setTimeout(hide, 1000);
            timestart = timestart - 5;
        }
        function hide() {
            document.getElementById("alertHere").textContent = "";
        }
        show();
    })
    putChoice3Here.addEventListener("click", function() {
        function show() {
            document.getElementById("alertHere").textContent = "Try Again!";
            setTimeout(hide, 1000);
            timestart = timestart - 5;
        }
        function hide() {
            document.getElementById("alertHere").textContent = "";
        }
        show();
    })
    putChoice4Here.addEventListener("click", function() {
        function show() {
            document.getElementById("alertHere").textContent = "Try Again!";
            setTimeout(hide, 1000);
            timestart = timestart - 5;
        }
        function hide() {
            document.getElementById("alertHere").textContent = "";
        }
        show();
    })
}

function startQ3() {
    document.getElementById("containerQ3").classList.remove("hidden");
    document.getElementById("containerQ2").classList.add("hidden");

    document.getElementById("putQuizHere").textContent = allquestions[2];
    document.getElementById("Q3putChoice1Here").innerHTML = q3choices[0];
    document.getElementById("Q3putChoice2Here").innerHTML = q3choices[1];
    document.getElementById("Q3putChoice3Here").innerHTML = q3choices[2];
    document.getElementById("Q3putChoice4Here").innerHTML = q3choices[3];

    var putChoice1Here = document.querySelector("#Q3putChoice1Here");
    var putChoice2Here = document.querySelector("#Q3putChoice2Here");
    var putChoice3Here = document.querySelector("#Q3putChoice3Here");
    var putChoice4Here = document.querySelector("#Q3putChoice4Here");
    
    putChoice3Here.addEventListener("click", function() {
        function show() {
            document.getElementById("alertHere").textContent = "Correct!";
            setTimeout(hide, 1000);
        }
        function hide() {
            document.getElementById("alertHere").textContent = "";
        }
        show();
        startQ4();
    })
    putChoice1Here.addEventListener("click", function() {
        function show() {
            document.getElementById("alertHere").textContent = "Try Again!";
            setTimeout(hide, 1000);
            timestart = timestart - 5;
        }
        function hide() {
            document.getElementById("alertHere").textContent = "";
        }
        show();
    })
    putChoice2Here.addEventListener("click", function() {
        function show() {
            document.getElementById("alertHere").textContent = "Try Again!";
            setTimeout(hide, 1000);
            timestart = timestart - 5;
        }
        function hide() {
            document.getElementById("alertHere").textContent = "";
        }
        show();
    })
    putChoice4Here.addEventListener("click", function() {
        function show() {
            document.getElementById("alertHere").textContent = "Try Again!";
            setTimeout(hide, 1000);
            timestart = timestart - 5;
        }
        function hide() {
            document.getElementById("alertHere").textContent = "";
        }
        show();
    })
}

function startQ4() {
    document.getElementById("containerQ4").classList.remove("hidden");
    document.getElementById("containerQ3").classList.add("hidden");

    document.getElementById("putQuizHere").textContent = allquestions[3];
    document.getElementById("Q4putChoice1Here").innerHTML = q4choices[0];
    document.getElementById("Q4putChoice2Here").innerHTML = q4choices[1];
    document.getElementById("Q4putChoice3Here").innerHTML = q4choices[2];
    document.getElementById("Q4putChoice4Here").innerHTML = q4choices[3];

    var putChoice1Here = document.querySelector("#Q4putChoice1Here");
    var putChoice2Here = document.querySelector("#Q4putChoice2Here");
    var putChoice3Here = document.querySelector("#Q4putChoice3Here");
    var putChoice4Here = document.querySelector("#Q4putChoice4Here");
    
    putChoice1Here.addEventListener("click", function() {
        function show() {
            document.getElementById("alertHere").textContent = "Correct!";
            setTimeout(hide, 1000);
        }
        function hide() {
            document.getElementById("alertHere").textContent = "";
        }
        show();
        startQ5();
    })
    putChoice2Here.addEventListener("click", function() {
        function show() {
            document.getElementById("alertHere").textContent = "Try Again!";
            setTimeout(hide, 1000);
            timestart = timestart - 5;
        }
        function hide() {
            document.getElementById("alertHere").textContent = "";
        }
        show();
    })
    putChoice3Here.addEventListener("click", function() {
        function show() {
            document.getElementById("alertHere").textContent = "Try Again!";
            setTimeout(hide, 1000);
            timestart = timestart - 5;
        }
        function hide() {
            document.getElementById("alertHere").textContent = "";
        }
        show();
    })
    putChoice4Here.addEventListener("click", function() {
        function show() {
            document.getElementById("alertHere").textContent = "Try Again!";
            setTimeout(hide, 1000);
            timestart = timestart - 5;
        }
        function hide() {
            document.getElementById("alertHere").textContent = "";
        }
        show();
    })
}

function startQ5() {
    document.getElementById("containerQ5").classList.remove("hidden");
    document.getElementById("containerQ4").classList.add("hidden");

    document.getElementById("putQuizHere").textContent = allquestions[4];
    document.getElementById("Q5putChoice1Here").innerHTML = q5choices[0];
    document.getElementById("Q5putChoice2Here").innerHTML = q5choices[1];
    document.getElementById("Q5putChoice3Here").innerHTML = q5choices[2];
    document.getElementById("Q5putChoice4Here").innerHTML = q5choices[3];

    var putChoice1Here = document.querySelector("#Q5putChoice1Here");
    var putChoice2Here = document.querySelector("#Q5putChoice2Here");
    var putChoice3Here = document.querySelector("#Q5putChoice3Here");
    var putChoice4Here = document.querySelector("#Q5putChoice4Here");
    
    putChoice3Here.addEventListener("click", function() {
        function show() {
            document.getElementById("alertHere").textContent = "Correct!";
            setTimeout(hide, 1000);
        }
        function hide() {
            document.getElementById("alertHere").textContent = "";
        }
        show();
        result();
    })
    putChoice2Here.addEventListener("click", function() {
        function show() {
            document.getElementById("alertHere").textContent = "Try Again!";
            setTimeout(hide, 1000);
            timestart = timestart - 5;
        }
        function hide() {
            document.getElementById("alertHere").textContent = "";
        }
        show();
    })
    putChoice1Here.addEventListener("click", function() {
        function show() {
            document.getElementById("alertHere").textContent = "Try Again!";
            setTimeout(hide, 1000);
            timestart = timestart - 5;
        }
        function hide() {
            document.getElementById("alertHere").textContent = "";
        }
        show();
    })
    putChoice4Here.addEventListener("click", function() {
        function show() {
            document.getElementById("alertHere").textContent = "Try Again!";
            setTimeout(hide, 1000);
            timestart = timestart - 5;
        }
        function hide() {
            document.getElementById("alertHere").textContent = "";
        }
        show();
    })
}

function result() {
    document.getElementById("viewHighscores").classList.remove("hidden");
    document.getElementById("containerQ5").classList.add("hidden");
    document.getElementById("putQuizHere").textContent = "Congraduation!";
    state = 0;
    document.getElementById("showGame").textContent = "Your Score: " + timestart;
    document.getElementById("dataForm").classList.remove("hidden");

}

function renderList(nickNames) {
    listEl.innerHTML = "";
    for (var i = 0; i < nickNames.length; i++) {
        var nickName = nickNames[i];
        var nickNameEl = document.createElement("li");
        nickNameEl.textContent = nickName + timestart;
        listEl.append(nickNameEl);
    }
}

dataFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    var newuser = nameInputEl.value;
    var nickNames = JSON.parse(localStorage.getItem("nickName")) || [];
    nickNames.push(newuser);
    localStorage.setItem("nickName", JSON.stringify(nickNames));
    renderList(nickNames);
})

