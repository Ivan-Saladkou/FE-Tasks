function fibonacci(a){
	let n=0;
	let mas=[];
	let rez=[];
	mas[0]=1;
	mas[1]=1;
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
	return rez;
}