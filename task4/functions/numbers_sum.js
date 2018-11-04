function numbers_sum(a){
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
	return sum;
}