function max(mas){
	mas[0]=Number(mas[0]);
	let max =mas[0];
	for (let i = 0; i < mas.length; i++) {
		mas[i]=Number(mas[i]);
		if(mas[i]>max){
			max=mas[i];
		}
	}
	return max;
}