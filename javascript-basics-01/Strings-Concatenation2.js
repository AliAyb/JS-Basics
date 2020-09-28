var name=prompt("Please enter your name");
var surname=prompt("Please enter your surname");
var city=prompt("Please enter your city name");
alert(name+"\n"+surname+"\n"+city)
function val(){
    var name=document.getElementById("name").value;
    var surname=document.getElementById("surname").value;
    var city=document.getElementById("city").value;

    alert(name+"\n"+surname+"\n"+city);
}