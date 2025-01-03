fetch('questionAnswerData.json')
    .then(res => res.json())
    .then(data => showData(data))
    .catch(error => console.log('error', error))

let body = document.querySelector('.body')

function showData(data){
    for (let i = 0; i < data.length; i++){
        console.log(data[i].answers.correct)
        let question = document.createElement('p');
        question.innerHTML = `${i+1}. ${data[i].question}`
        
        // A
        let divA = document.createElement('div')
        let labelA = document.createElement('label');
        let inputA = document.createElement('input');
        inputA.type = 'radio'
        inputA.name = `quest${i+1}`;
        labelA.innerHTML = `A. ${data[i].answers.a}`

        // B
        let divB = document.createElement('div')
        let labelB = document.createElement('label');
        let inputB = document.createElement('input');
        inputB.type = 'radio'
        inputB.name = `quest${i+1}`;
        labelB.innerHTML = `B. ${data[i].answers.b}`

        // C
        let divC = document.createElement('div')
        let labelC = document.createElement('label');
        let inputC = document.createElement('input');
        inputC.type = 'radio'
        inputC.name = `quest${i+1}`;
        labelC.innerHTML = `C. ${data[i].answers.c}`

        // answer check section
        if (data[i].answers.correct === 'a'){
            inputA.checked = true;
        } else if (data[i].answers.correct === 'b'){
            inputB.checked = true;
        } else if (data[i].answers.correct === 'c'){
            inputC.checked = true;
        }

        // append section
        let section = document.createElement('section');
        section.append(question)

        divA.append(inputA, labelA)
        divB.append(inputB, labelB)
        divC.append(inputC, labelC)

        section.append(divA, divB, divC)
        body.append(section);
    }
}