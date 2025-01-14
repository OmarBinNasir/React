
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {

        var j = Math.floor(Math.random() * (i + 1));

        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

function createArray(n){
    let array = [];
    for( let i = 0; i < 2 * n ; i++){
        array.push(i+1);
        array.push(i+1);
    }
    array = shuffleArray(array);
    console.log(array)
    console.log(array.length)
    return array;
}


