const submitBtn = document.querySelector(".button");
const container = document.querySelector(".questionContainer");

let i = 0;
let score = 0;

const questions = [
  "Which language runs in a web browser?",
  "What does CSS stands for?",
  "What does HTML stands for?",
  "What year JavaScript launched?",
];

const answers = [
  [
    { name: "Java", value: "b" },
    { name: "C", value: "b" },
    { name: "Python", value: "b" },
    { name: "JavaScript", value: "a" },
  ],
  [
    { name: "Certified Style Sheets", value: "b" },
    { name: "Cascading Style Sheets", value: "a" },
    { name: "Cascading Simple Sheets", value: "b" },
    { name: "Cars SUVs Sailboats", value: "b" },
  ],
  [
    { name: "Hypertext Markup Language", value: "a" },
    { name: "Hypertext Mardown Language", value: "b" },
    { name: "Hyperloop Machine Language", value: "b" },
    { name: "Helicopters Terminals Motorboats Lamborginis", value: "b" },
  ],
  [
    { name: "1998", value: "b" },
    { name: "1995", value: "a" },
    { name: "1994", value: "b" },
    { name: "none of the above", value: "b" },
  ],
];

submitBtn.addEventListener("click", nextQuestion);

function questionMaker() {
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");
  questionDiv.textContent = questions[i];
  const answersdiv = document.createElement("div");
  answersdiv.classList.add("answers");
  answersdiv.innerHTML = `
          <div>
            <input type="radio" name="answer" id="answer1" value="${answers[i][0].value}" />
            <label for="answer1">${answers[i][0].name}</label>
          </div>
          <div>
            <input type="radio" name="answer" id="answer2" value="${answers[i][1].value}" />
            <label for="answer2">${answers[i][1].name}</label>
          </div>
          <div>
            <input type="radio" name="answer" id="answer3" value="${answers[i][2].value}" />
            <label for="answer3">${answers[i][2].name}</label>
          </div>
          <div>
            <input type="radio" name="answer" id="answer4" value="${answers[i][3].value}" />
            <label for="answer4">${answers[i][3].name}</label>
          </div>`;
  container.innerHTML = "";
  container.appendChild(questionDiv);
  container.appendChild(answersdiv);
}

questionMaker();

function nextQuestion() {
  let answer = container.querySelector('input[name="answer"]:checked').value;
  if (answer) {
    if (answer === "a") {
      score++;
    }
    i++;
    if (i < questions.length) {
      questionMaker();
    } else {
      container.innerHTML = `You answered ${score}/${questions.length} correctly!`;
      submitBtn.textContent = "Reload";
      submitBtn.addEventListener("click", () => {
        window.location.reload();
      });
    }
  }
}
