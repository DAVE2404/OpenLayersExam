$( document ).ready(function() {
    $('#result ul li a').hide();
});
function start(){
    var i = 1;
    var timer = setInterval(() => {
        if(i==7){
            clearInterval(timer);
            sort();
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
    }, 1800);
}
function doubleCheck(i,divNm){
    let selectAtag = document.getElementsByTagName("a");
    let checkAtag = selectAtag.item(i-1).innerHTML;
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

//배열로 만들어서  sort
function sort(){
    var array = [];
    let selectAtag = document.getElementsByTagName("a");
    for(let l = 0;l < 6;l++){
        array.push(selectAtag.item(l).innerHTML);
    }
    array.sort(compareNumbers);
    for(let count =0 ; count < 6; count++){
        let result = document.querySelector("ul").getElementsByTagName("li");
        let reresult = result.item(count).getElementsByTagName("a");
        for(let v = 0;v<reresult.length;v++){
            reresult.item(v).innerHTML= array[v];
        }
        if(count<4) start();
    }
    $('#result ul li a').show();
}
function compareNumbers(a,b){
    return a - b;
}