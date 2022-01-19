function checkPromocode(promocode) {
    if (typeof promocode === 'number' && `${promocode}`.length === 8) {
        const numbers = Array.from(`${promocode}`, Number);
        const oddRows = [];
        let oddRow = [];
        for (let i = 0; i <= numbers.length; i++) {
            if (numbers[i] % 2 !== 0) {
                oddRow.push(numbers[i]);
            }
            else {
                if (oddRow.length >= 2) {
                    oddRows.push(oddRow);
                }
                oddRow = [];
            }
		if (i === numbers.length && oddRow.length >= 2) {
			oddRows.push(oddRow);
		}
        }
        if (oddRows.length >= 2) {
            if (oddRows[0][0] < oddRows[0][1] && oddRows[1][0] < oddRows[1][1]) {
                return 2000;
            }
            else return 1000;
        } 
        else {
            const sumEven = numbers.filter(num => num%2 === 0).reduce((sum,num) => sum + num, 0);
            const sumOdd = numbers.filter(num => num%2 !== 0).reduce((sum,num) => sum + num, 0);
            if (sumEven > sumOdd) {
                return 100;
            }
            return 0;
        }
    }
    else return 0;
}
