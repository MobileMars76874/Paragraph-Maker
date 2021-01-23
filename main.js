function make_paragraph(){
var Line_1 = document.getElementById("para_input_box_1").value;
var Line_2 = document.getElementById("para_input_box_2").value;
var Line_3 = document.getElementById("para_input_box_3").value;
var Line_4 = document.getElementById("para_input_box_4").value;
var Line_5 = document.getElementById("para_input_box_5").value;
var Line_6 = document.getElementById("para_input_box_6").value;
var para = Line_1+"."+Line_2+"."+Line_3+"."+Line_4+"."+Line_5+"."+Line_6+".";
console.log(para);
document.getElementById("output").innerHTML = para;
}