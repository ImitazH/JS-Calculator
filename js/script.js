function addfirstbracket()
{
  'use strict';
	document.calculator.display.value +="(";
}
function addsecondbracket()
{
	document.calculator.display.value +=")";
}
function addDivider()
{
	document.calculator.display.value +="/";
}

function addMultiply()
{
	document.calculator.display.value +="*";
}

function addSeven()
{
	document.calculator.display.value +=7;
}

function addEight()
{
	document.calculator.display.value +=8;
}

function addNine()
{
	document.calculator.display.value +=9;
}

function addMinus()
{
	document.calculator.display.value +="-";
}
function addFour()
{
	document.calculator.display.value +=4;
}

function addFive()
{
	document.calculator.display.value +=5;
}

function addSix()
{
	document.calculator.display.value +=6;
}
function addPlus()
{
	document.calculator.display.value +="+";
}
function addOne()
{
	document.calculator.display.value +=1;
}
function addTwo()
{
	document.calculator.display.value +=2;
}

function addThree()
{
	document.calculator.display.value +=3;
}
function addZero()
{
	document.calculator.display.value +=0;
}
function addPoint()
{
	document.calculator.display.value +=".";
}
function addClear()
{
	document.calculator.display.value ="";
}
function displayResult()
{
	var result=eval(document.calculator.display.value);
	document.calculator.display.value =result;
}
