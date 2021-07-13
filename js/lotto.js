function start(){
    var i = 1;
    var timer = setInterval(() => {
        if(i==7){
            clearInterval(timer);
        }else{
            var divNm;
            switch(i){
                case 1 : divNm = "one";break;
                case 2 : divNm = "two";break;
                case 3 : divNm = "three";break;
                case 4 : divNm = "four";break;
                case 5 : divNm = "five";break;
                case 6 : divNm = "six";break;
            }
            randomNum(i,divNm);
            i++;
        }
    }, 2000);
}
function randomNum(i,divNm){
    let testinterval =setInterval(() => {
        let fnum = (Math.random()*45)+1;
        let snum = Math.floor(fnum);
        document.getElementById(divNm).innerHTML = snum ;
        
    }, 50);
    setTimeout(() => {
        doubleCheck(i,divNm);
        clearTimeout(testinterval)
    }, 2000);
}
function doubleCheck(i,divNm){
    let selectAtag = document.getElementsByTagName("a");
    let checkAtag = selectAtag.item(i-1).innerHTML;
    console.log(checkAtag);
    for(let l = 0; l < i-1 ; l++){
        let fnum = (Math.random()*45)+1;
        let snum = Math.floor(fnum);
        if(checkAtag == selectAtag.item(l).innerHTML){
            document.getElementById(divNm).innerHTML = snum ;
        }
        // else{
        //     if(snum>0 && snum<10){//yellow
        //         document.getElementById(divNm).style.backgroundColor = "yellow";
        //     }else if(snum>=10 && snum<20){//blue
        //         document.getElementById(divNm).style.backgroundColor = "blue";
        //     }else if(snum>=20 && snum<30){//red
        //         document.getElementById(divNm).style.backgroundColor = "red";
        //     }else if(snum>=30 && snum<40){//gray
        //         document.getElementById(divNm).style.backgroundColor = "gray";
        //     }else{//green
        //         document.getElementById(divNm).style.backgroundColor = "green";
        //     }    
        // }
    }
}