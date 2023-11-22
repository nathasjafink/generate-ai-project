/*
* Backend:
* ollama run mistral
* */
/*
const button = document.querySelector('button');
const input = document.querySelector('input');
const pTag = document.querySelector('p');
button.addEventListener("click", () => {
    fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "mistral",
            prompt: `The following is a list of dishes you can make with the following ingredients: ${input.value}`,
            stream: false
        })
    })
        .then(response => response.json())
        .then(data => {
            pTag.innerText = data.response;
            console.log(data.response);
        })
        .catch(error => {
            console.error("Error:", error);
        });
});*/

const button = document.querySelector('.btn1');
const input = document.querySelector('input');
const pTag = document.querySelector('p');
const loadingSpan = document.querySelector('span.loading')
button.addEventListener("click", () => {
    loadingSpan.classList.remove('hidden');
    getGeneratedText(`The following is a list of 10 exercises for: ${input.value}` )
        .then(generatedText => {
            pTag.innerText = generatedText;
            loadingSpan.classList.add('hidden');
        });

});

const btnForPlanner = document.querySelector('.btn2');
const output = document.querySelector('.workout-plan');
const twoDaySplit = document.querySelector('#day-split-2 ');
const threeDaySplit = document.querySelector('#day-split-3');
const fourDaySplit = document.querySelector('#day-split-4');
const inputMin = document.querySelector('#time');
const inputMuscleGroup = document.querySelector('#focus-muscle-group');

btnForPlanner.addEventListener('click', async () => {
    const selectedProgram = getSelectedProgram();
    const trainingTime = inputMin.value;
    const focusedMuscleGroup = funcFocusedMuscleGroup();


    getGeneratedText(`The following is a workout plan and show the different exercises you can do for your workout: ${selectedProgram}, ${trainingTime}, ${focusedMuscleGroup}` )
        .then(generatedText => {
            output.innerText = generatedText;
        });
});

function getSelectedProgram () {
    if (twoDaySplit.checked) {
        return '2 day split';
    } else if (threeDaySplit.checked) {
        return '3 day split';
    } else if (fourDaySplit.checked) {
        return '4 day split';
    } else {
        return 'No program selected';
    }
}

function funcFocusedMuscleGroup () {
    const input = inputMuscleGroup.value
    if (input) {
        return input;
    } else {
        return 'No focused muscle group has been added'
    }
}



