const questions = [
    {question: 'Jeg er enig i gratis SFO',
     enig: {MDG: 2, A: 2, H:0},
     uenig: {H:0, MDG:0, A:0}
    },
    {question: 'Jeg er uenig i bybane over Bryggen',
     enig: {MDG: 1, A: 2, H:0},
     uenig: {H:2, MDG:0, A:0}
    },
]; // ... add more questions

let partyScores = {
    MDG: 0,
    A: 0,
    H: 0
}

const questionT = document.getElementById('question')
const btnNext = document.getElementById('btnNext')
const rbAnswer = document.getElementsByName('answer')

btnNext.addEventListener('click', nextQuestion)

let qidx = 0
questionT.innerHTML = questions[qidx].question

function nextQuestion() {
    let radioChecked = document.querySelector('input[name="answer"]:checked');
    
    if (radioChecked) {
        calculateResult(qidx, radioChecked.value)
        qidx++
        if (qidx < questions.length) {
            questionT.innerHTML = questions[qidx].question
            radioChecked.checked = false
            
        }
        else { 
            //
        }
    }

}

function calculateResult(qidx, chosen) {
    console.log(qidx, chosen)

    let partyChoices = questions[qidx][chosen]
    console.log(partyChoices)

    for (let party in partyChoices){
        partyScores[party] += partyChoices[party]
    }
    console.log(partyScores)
}