const questionsArray = ['Jeg er enig i gratis SFO', 'Jeg er uenig i bybane over Bryggen']; // ... add more questions
const questions = [
    {
        question: "Jeg er enig i gratis SFO",
        option1: { PartiA: 2, PartiB: 1, PartiC: 0 },
        option2: { PartiA: 0, PartiB: 1, PartiC: 2 }
    },
    {
        question: "Jeg er uenig i bybane over Bryggen",
        option1: { PartiA: 1, PartiB: 2, PartiC: 1 },
        option2: { PartiA: 2, PartiB: 0, PartiC: 1 }
    }
    // ... legg til flere spørsmål og vekting her ...
]
let partyScores = {
    PartiA: 0,
    PartiB: 0,
    PartiC: 0
};

const questionT = document.getElementById('question')
const btnNext = document.getElementById('btnNext')
const rbAnswer = document.getElementsByName('answer')

btnNext.addEventListener('click', nextQuestion)

let qidx = 0
questionT.innerHTML = questions[qidx].question

function nextQuestion() {
    let radioChecked = document.querySelector('input[name="answer"]:checked');
    
    if (radioChecked) {
        calculateResult(radioChecked.value, qidx)
        
        if (qidx < questions.length-1) {
            qidx++;
            questionT.innerHTML = questions[qidx].question
        

        }
        else showResult()
    }

}

function calculateResult(option, qidx) {
    let optionValues = questions[qidx][option]; 

    for (let party in optionValues) {
        partyScores[party] += optionValues[party]; 
    }
}
function showResult() {
    let maxScore = 0
    for (let party in partyScores) {
        if (partyScores[party] > maxScore) {
            maxScore = partyScores[party]
            maxParty = party
        }
    }

    console.log(maxScore, maxParty)
}