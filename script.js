const text="Aspiring Software Engineer";

let i=0;

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,100);

}

}

typing();

function reveal(){

let reveals=document.querySelectorAll(".reveal");

for(let r of reveals){

let windowHeight=window.innerHeight;

let revealTop=r.getBoundingClientRect().top;

let revealPoint=120;

if(revealTop<windowHeight-revealPoint){

r.classList.add("active");

}

}

}

window.addEventListener("scroll",reveal);

reveal();

document.getElementById("downloadBtn").onclick=function(){

const {jsPDF}=window.jspdf;

const doc=new jsPDF();

doc.setFontSize(20);

doc.text("C KARTHIK",20,20);

doc.setFontSize(12);

doc.text("Phone : +91 9177164536",20,35);

doc.text("Email : 24G01A4324@svpcet.org",20,45);

doc.text("Career Objective",20,60);

doc.text("Motivated B.Tech student seeking internship opportunities.",20,70);

doc.text("Technical Skills",20,90);

doc.text("- C",20,100);

doc.text("- Python",20,110);

doc.text("- Java",20,120);

doc.text("- MATLAB",20,130);

doc.text("Languages : Telugu, English, Hindi",20,150);

doc.text("Hobbies : Reading Books, Nature Travel",20,165);

doc.save("C_Karthik_Resume.pdf");

}