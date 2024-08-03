function clock(){
    setInterval(()=>{
        let date=new Date();
        let hours=date.getHours();
        let minutes=date.getMinutes();
        let seconds=date.getSeconds();
        let ampm = '';
        if(hours >= 12){
            ampm = 'PM';
        }
        else {
            ampm = 'AM';
        }
        console.log(`${hours}:${minutes}:${seconds} ${ampm}`);
    },1000);
}
clock();