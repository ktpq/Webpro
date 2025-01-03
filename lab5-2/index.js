fetch('student-score.json')
    .then(res => res.json())
    .then(data => showData(data))
    .catch(error => console.log('error', error))

let grid = document.querySelector('.grid');

function showData(data){
    console.log(data)
    for (let i = 0; i < data.length; i++){
        // img part
        let img = document.createElement('img');
        if (data[i].gender === 'Male'){
            img.src = 'http://10.0.15.21/lab/lab5/images/img_male.png';
        } else {
            img.src = 'http://10.0.15.21/lab/lab5/images/img_female.png';
        }
        
        // h3 part
        let h3 = document.createElement('h3');
        h3.innerHTML = `${i+1}. ${data[i].name}`
        
        // p part
        let phy = document.createElement('p');
        phy.innerHTML = `Physics : ${data[i].physics}`

        let math = document.createElement('p');
        math.innerHTML = `Mathmatics : ${data[i].maths}`

        let eng = document.createElement('p');
        eng.innerHTML = `English : ${data[i].english}`

        let cardContent = document.createElement('div')
        cardContent.classList.add('card-content');

        let card = document.createElement('div')
        card.classList.add('card');

        cardContent.append(img)
        cardContent.append(h3)
        cardContent.append(phy)
        cardContent.append(math)
        cardContent.append(eng)
        card.append(cardContent)
        grid.append(card)
    }
}