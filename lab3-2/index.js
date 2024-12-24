function randomNumber(){
    let numbers = [];
    for (let i = 0; i < 6;i++){
        numbers.push(Math.floor(Math.random()*10));
    }

    let images = document.querySelectorAll('.images');
    images.forEach((image, index) => {
        image.src = `http://10.0.15.21/lab/lab3/images/${numbers[index]}.png`
    }); 
}