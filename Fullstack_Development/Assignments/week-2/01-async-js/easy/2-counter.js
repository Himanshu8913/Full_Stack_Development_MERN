function counter(){
    let count=0;
    setTimeout(function timer(){
        count++;
        console.log(count);
        setTimeout(timer, 1000);
    },1000);
}

counter();