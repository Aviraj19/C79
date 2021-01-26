var studentarray=[];
function submit() {
var Name1=document.getElementById("Name1").value;
studentarray.push(Name1);
var Name2=document.getElementById("Name2").value;
studentarray.push(Name2);
var Name3=document.getElementById("Name3").value;
studentarray.push(Name3);
var Name4=document.getElementById("Name4").value;
studentarray.push(Name4);
console.log(studentarray);
document.getElementById("displayname").innerHTML=studentarray;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting() {
    studentarray.sort();
    console.log(studentarray);
document.getElementById("displayname").innerHTML=studentarray;
}