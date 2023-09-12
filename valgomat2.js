const questions = [
    {question: 'Jeg er enig i gratis SFO',
     enig: {MDG: 2, A: 2, H:0},
     uenig: {H:0, MDG:0, A:0}
    },
    {question: 'Jeg er uenig i bybane over Bryggen',
     enig: {MDG: 1, A: 2, H:0},
     uenig: {H:2, MDG:0, A:2}

    },
    {question: 'Jeg ønsker Hordfast',
     enig: {MDG: 0, A: 0, H:2},
     uenig: {H:0, MDG:0, A:0}
    }
]; // ... add more questions

let partyScores = {
    MDG: 0,
    A: 0,
    H: 0
}

const questionT = document.getElementById('question')
const btnNext = document.getElementById('btnNext')
const rbAnswer = document.getElementsByName('answer')
const inputForm = document.getElementById('valgomatForm')

btnNext.addEventListener('click', nextQuestion)

let qidx = 0
questionT.innerHTML = questions[qidx].question

function nextQuestion() {
    let radioChecked = document.querySelector('input[name="answer"]:checked');
    
    if (radioChecked) {
        calculateResult(qidx, radioChecked.value)
        qidx++
        if (qidx < questions.length) {
            
            radioChecked.checked = false
            questionT.innerHTML = questions[qidx].question
            
        }
        else { 
            inputForm.style.display = 'none'
            showResult()
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

function showResult() {
    let sorted = new Map()
    const resultBox = document.getElementById("result")

    while (sorted.size < Object.keys(partyScores).length ) {
        let max = null

        for (party in partyScores) {
            if (max ===null && !sorted.has(party)) {
                max = party
            }
            else if(partyScores[party] > partyScores[max] && !sorted.has(party)) {
                max = party
            }
        }
        sorted.set(max, partyScores[max])
    }


    sorted.forEach((score, party) => {
        console.log(party, score);
    });

}