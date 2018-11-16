function numbers_sum(a) {
    let ost = 0;
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += Number(a[i]);
    }
    return sum;
}