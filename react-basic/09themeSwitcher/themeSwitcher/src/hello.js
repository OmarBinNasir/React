x = {
    flag : 1, 
    toString : () => {
        return x.flag++;
    } 
}

if( x == 1 && x == 2 && x == 3){
    console.log("hello world")
}

for(  let i = 0; i < 100; i++){
    let flag = 0;
    
    if( i == 1 || i == 0 )
        {
            flag = 1;
        }

    for( let j = 2; j < i / 2 + 1; j++){
        
        if( i % j == 0 ){
            flag = 1;
            break;
        }
    }
    if( flag == 0){
        console.log(i)
    }
}


