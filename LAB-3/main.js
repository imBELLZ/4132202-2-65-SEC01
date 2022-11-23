
 var num = 10;
 let name = "BELLZ";
//  let Array = [10,15,"BELLZ"];
 const obj = {name: "BELLZ",age : 20};
 const objMix = { 
    data:[ 
     {name : "dang",gpa: 4.3},
    {name :"dum",gpa : 2.8},
 ],
 };
console.log(num);
console.log(Array);
console.log(objMix);

let string = num + name;
console.log(string);

string = objMix.data[1].name + Array[0];
console.log(string);

string = "<p>" + Array[2] + "<p>";
string = `<P>${Array}</p>`;
console.log(string);

function Add (a,b) {
 return a+b;   
}
console.log(Add(3,5));


document.getElementById("div1").innerHTML = name;
$(function () {
//   alert("Hello"); 
$("#div1").html("Thanapat");

$("#bt1").bind("click",function () {
    $("#div1").html("lnwBELLZ");
});

$("#bt2").click("click",function () {
    $("#div1").html("i love it");
});

$("#bt3").click(()=>{
    $(".in1").val("Bru");
 });
 $("#bt4").click(()=>{
   $(".in1:odd").addClass("red")
 });
 $("#div_about").load("./pages/about.html");





});
