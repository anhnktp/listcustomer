'use strict'

var step1Btn= document.getElementById("step1Btn");
var step2Btn= document.getElementById("step2Btn");
var step3Btn= document.getElementById("step3Btn");
function backToStep1(){
	step2Btn.classList.remove("active");
	step1Btn.classList.add("active");
}
function toStep2(){
	step1Btn.classList.remove("active");
	step2Btn.classList.add("active");
}
function backToStep2(){
	step3Btn.classList.remove("active");
	step2Btn.classList.add("active");
}
function toStep3(){
	step2Btn.classList.remove("active");
	step3Btn.classList.add("active");
}

var step1Btn2= document.getElementById("step1Btn2");
var step2Btn2= document.getElementById("step2Btn2");
var step3Btn2= document.getElementById("step3Btn2");
function backToStep12(){
	step2Btn2.classList.remove("active");
	step1Btn2.classList.add("active");
}
function toStep22(){
	step1Btn2.classList.remove("active");
	step2Btn2.classList.add("active");
}
function backToStep22(){
	step3Btn2.classList.remove("active");
	step2Btn2.classList.add("active");
}
function toStep32(){
	step2Btn2.classList.remove("active");
	step3Btn2.classList.add("active");
}