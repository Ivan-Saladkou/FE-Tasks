function arithmetical_mean(mas){
	let sum =0;
	let result=0
	for (let i = 0; i < mas.length; i++) {
		mas[i]=Number(mas[i]);
		sum+=mas[i];
	}
	result= sum/mas.length
	return result;
}