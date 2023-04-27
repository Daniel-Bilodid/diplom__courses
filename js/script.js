let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}


const quizData = [
   {
       question: "What does HTML stand for?",
       a: "Hyperlinks and Text Markup Language",
       b: "Home Tool Markup Language",
       c: "Hyper Text Markup Language",
       d: "Hypertext Markdown Language",
       correct: "c",
   },
   {
       question: "Choose the correct HTML element for the largest heading",
       a: "<heading>",
       b: "<h1>",
       c: "<h6>",
       d: "<head>",
       correct: "b",
   },
   {
       question: "How can you make a numbered list?",
       a: "<list>",
       b: "<ul>",
       c: "<ol>",
       d: "<dl>",
       correct: "c",
   },
   {
       question: "Which of these elements are all <table> elements?",
       a: "<thead><body><tr>",
       b: "<table><head><tfoot>",
       c: "<table><tr><td>",
       d: "none of the above",
       correct: "c",
   },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit-test')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
   deselectAnswers()
   const currentQuizData = quizData[currentQuiz]
   questionEl.innerText = currentQuizData.question
   a_text.innerText = currentQuizData.a
   b_text.innerText = currentQuizData.b
   c_text.innerText = currentQuizData.c
   d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
   answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
   let answer
   answerEls.forEach(answerEl => {
       if(answerEl.checked) {
           answer = answerEl.id
       }
   })
   return answer
}
submitBtn.addEventListener('click', () => {
   const answer = getSelected()
   if(answer) {
      if(answer === quizData[currentQuiz].correct) {
          score++
      }
      currentQuiz++
      if(currentQuiz < quizData.length) {
          loadQuiz()
      } else {
          quiz.innerHTML = `
          <h2>You answered ${score}/${quizData.length} questions correctly</h2>
          <button onclick="location.reload()">Reload</button>
          `
      }
   }
})