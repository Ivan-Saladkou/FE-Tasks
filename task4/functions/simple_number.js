function simple_number(n) {
	let buf=[]
	buf[0]=2;
	count=0;
		for (let i= 3; i <n; i++) {
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
	return buf;
}