

function shuffle(array){
    for (let index = 0; index < array.length; index++) {
        let temp = array[index];
        let randomIndex = Math.floor(Math.random()*array.length);
        array[index] = array[randomIndex];
        array[randomIndex] = temp; 
    }

    return array;
}


