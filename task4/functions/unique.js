function unique(mas){
	let buf=[];
	buf[0]=mas[0];
	count=0;
		for (let i = 0; i < mas.length; i++) {
			for (let j = 0; j <buf.length; j++){
				if(mas[i]!==buf[j]){
				count++;
				}
			}
			if(count==buf.length){
			buf.push(mas[i]);
			}
			count=0;
		}
	return buf;
}