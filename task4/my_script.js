

function array_input(){
	let j=0;
	let arr=[];

	alert("Последовательно введите элементы массива");
	arr[0]=prompt("Введите первый элемент");
	
	while(confirm("Это последний элемент массива?")===false){
		j=j+1;
		arr[j]=prompt("введите очередной элемент");
	
	}
	return arr;
}

function show_array(arr){
	let str="";
	for (let i = 0; i < arr.length; i++) {
		str+=arr[i]+" ";
	}
	alert(str);
}

function arithmetical_mean(){
	let mas=array_input();
	let sum =0;
	for (let i = 0; i < mas.length; i++) {
		mas[i]=Number(mas[i]);
		sum+=mas[i];
	}
	alert("Среднее арифметическое массива = "+sum/mas.length);
	return sum/mas.length;
	
} 

function max(){
	let mas=array_input();
	let max =mas[0];
	for (let i = 0; i < mas.length; i++) {
		if(mas[i]>max){
			max=mas[i];
		}
	}
	alert("Максимальное число в массиве = "+max);
	return max;
}

function numbers_sum(){
	let a=prompt("Введите число");
	let ost=0;
	let sum=0;
	while(true){
		if(a<10){
			sum+=a;
			break;
		}
		ost=a%10;
		a=(a-ost)/10;
		sum+=ost;	
	}
	alert("Сумма цифр введенного числа  = "+sum);
	return sum;
}

function unique(){
	let mas=array_input();
	let buf=[];
	buf[0]=mas[0];
	count=0;
		for (let i = 0; i < mas.length; i++) {
			for (let j = 0; j <buf.length; j++){
				if(mas[i]!=buf[j]){
				count++;
				}
			}
			if(count==buf.length){
			buf.push(mas[i]);
			}
			count=0;
		}
	alert("уникальные значения в массиве следущие:");
	show_array(buf);
	return buf;
}

function palindrom(){
	let a=prompt("Введите слово");
	let mas=a.split("");
	let sam =mas.reverse();
	count=0;
	answ=false;
	for (let i = 0; i < mas.length; i++) {
		if(mas[i]==sam[(sam.length-1)-i]){
		count++;
		}
		else{
			break;
		}
	}
	if(count==mas.length){
		alert("ИСТИНА")
		answ=true;
	}
	else{
		alert("ЛОЖЬ")
	}
	return answ;
}	

function simple_number() {
	let a=prompt("Введите число");
	let buf=[]
	buf[0]=2;
	count=0;
	
		for (let i= 3; i <a; i++) {
			for (let j = 0; j <buf.length; j++){
				if(i%buf[j]!=0){
				count++;
				}
				else{
					break;
				}
			}
			if(count==buf.length){
				buf.push(i);
			}
			count=0;
		}
	buf.unshift(1);
	alert("простые числа в этом диапазоне: ");
	show_array(buf);
	return buf;
}
function simple_number_n() {
	let a=prompt("Введите нужное количество простых чисел");
	let buf=[]
	buf[0]=2;
	count=0;
	for (let i = 3; i < 1000000; i++) {
	  
		for (let j = 0; j <buf.length; j++){
			if(i%buf[j]!=0){
			count++;
			}
			else{
			break;	
			}
		}
		if(count==buf.length){
			buf.push(i);
		}
		count=0;
		if(buf.length==a-1){
			break;
		}
	}
	buf.unshift(1);
	alert("первые "+a+" простых чисел");
	show_array(buf);
	return buf;
}

function fibonacci(){
	let a=prompt("Введите нужное количество четных чисел Фибоначчи");
	let mas=[];
	let rez=[];
	mas[0]=1;
	mas[1]=1;
	let n=0;
	for(let i=2; i<100000;i++){
		n=mas[i-1]+mas[i-2];
		mas.push(n);
		if(n%2==0){
			if(rez.length==a){
				break;
			}
			rez.push(n);
		}
	}
	alert(a+" четных чисел Фибоначчи");
	show_array(rez);
	return rez;
}

function last10(){
	let a=prompt("Введите кол-во чисел от 1 до 1000");
	a=Number(a);
	a=a+1;
	let mas=[];
	let n=1;
	let sum=0;
	for(let i=1; i<a;i++){
		n=Math.pow(i,i);
		mas.push(n);
		sum+=n;
	}
	sum=String(sum);
	sum=sum.split("");
	sum=sum.slice(-10);
	let rez="";
	for(let j=0;j<sum.length;j++){
     rez+=sum[j];
	}
	alert(rez);
	return sum;
}