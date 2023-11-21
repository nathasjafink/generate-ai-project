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
