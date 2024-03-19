let num1 = Number(prompt("enter 1st number"));
let num2 = Number(prompt("enter 2nd number"));
let num3 = Number(prompt("enter 3rd number"));
if(num1 > num2 && num1 > num3){
	console.log("first numbers is big");
}else if(num2 > num3){
	console.log("2nd number is big");
}else{
	console.log("3rd number is big");
}