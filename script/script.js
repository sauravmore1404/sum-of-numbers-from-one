function sumof() {
    let userInputnumber =  document.getElementById('demo').value;   
    if(userInputnumber === "") {
    document.getElementById('demo2').innerHTML='';
    document.getElementById('demo2').style.padding='0'
    document.getElementById('demo2').style.borderWidth='0'
    return;
    }
    document.getElementById('demo2').style.padding='3px'
    document.getElementById('demo2').style.borderWidth='1px'
    let answer=0;
    for (var i=1; i<= userInputnumber; i++) {
        answer = answer + i;
        console.log(answer , i)
    } 
    document.getElementById('demo2').innerText = 'Sum of number 0 to '+userInputnumber+ ' is ' + answer
}