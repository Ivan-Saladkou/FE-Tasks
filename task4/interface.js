var result =document.getElementById("result")
function array_input(){
	let j=0;
	let arr=[];
	let str=prompt("Введите массив");
	arr=str.split(" ");
	return arr;
}
function show_array(arr){
	let str="";
	for (let i = 0; i < arr.length; i++) {
		str+=arr[i]+" ";
	}
	result.innerHTML+=" "+str;
}
function task1(){
	result.innerHTML="";
	let n=prompt("Введите число");
	if(n<=1){
	let message="no simple numbers"
	result.innerHTML+=message;
	return;
	}
	let arr=simple_number(n);
	result.innerHTML+="простые числа до "+n+":";
	show_array(arr);
}
function task2(){
	result.innerHTML="";
	let n=prompt("Введите нужное количество простых чисел");
	let arr=simple_number_n(n);
	if(n<=1){
	let message="no simple numbers"
	result.innerHTML+=message;
	return;
	}
	result.innerHTML+="первые "+n+" простых чисел:";
	show_array(arr);
}
function task3(){
	result.innerHTML="";
	let n=prompt("Введите нужное количество четных чисел Фибоначчи:");
	if(n<=1){
	let message="no fibonacci numbers"
	result.innerHTML+=message;
	return;
	}
	let arr=fibonacci(n);
	result.innerHTML+=n+" четных чисел Фибоначчи";
	show_array(arr);
}
function task4(){
	result.innerHTML="";
	let n=prompt("Введите кол-во чисел от 1 до 1000");
	let a=last10(n);
	result.innerHTML+=a;
}
function task5(){
	result.innerHTML="";
	let arr=array_input();
	let anwser=arithmetical_mean(arr);
	result.innerHTML+="Среднее арифметическое массива ="+anwser;
}
function task6(){
	result.innerHTML="";
	let arr=array_input();
	let anwser=max(arr);
	result.innerHTML+="Максимальное число в массиве = "+anwser;
}
function task7(){
	result.innerHTML="";
	let arr=array_input();
	arr=unique(arr);
	result.innerHTML+="уникальные значения в массиве следущие: ";
	show_array(arr);
}
function task8(){
	result.innerHTML="";
	let n=prompt("Введите слово");
	let a=palindrom(n);
	result.innerHTML+=a;
}
function task9(){
	result.innerHTML="";
	let n=prompt("Введите число");
	let a=numbers_sum(n);
	result.innerHTML+="Сумма цифр введенного числа  = "+a;
}