// setInterval(function(){
//     document.write('hellow world')
// },1000)

// function timer(){
//     document.write('Adil')
// }
// setInterval(timer,1000)

// setTimeout(function(){
//     document.write('abc'),1000
// })


// var num = 0 
// setInterval(function(){
//     num++
     
//     document.write(num)
// },1000)

alert('Hi! Type Stop watch')
var a = prompt("Enter name")



var minutes = 0
var second = 0
var milisecond  = 0
var getmin = document.getElementById('min')
var getsec = document.getElementById('sec')
var getmsec = document.getElementById('msec')

var a;
 

 


function Start(){
    

a = setInterval(function(){
    milisecond++
    getmsec.innerHTML = milisecond 
    if (
        milisecond >=60
    ){
        second++
        getsec.innerHTML = second
         milisecond = 0
         
    }
    else if(
        second >=60
    ){
        minutes++
        getmin.innerHTML = minutes
        second = 0
    }
},100)
    document.getElementById('sss').disabled = true

}

function stop(){
    clearInterval(a)
    document.getElementById('sss').disabled = false
}


function reset(){
    minutes = 0 
    milisecond = 0
    second =0
    getmin.innerHTML =0 
    getsec.innerHTML =0 
    getmsec.innerHTML =0 
}




