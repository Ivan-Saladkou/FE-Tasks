function last10(a){
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
	return rez;
}