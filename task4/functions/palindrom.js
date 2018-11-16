function palindrom(a){
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
		answ=true;
	}
	return answ;
}