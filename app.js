const karatsuba = (x, y) => {
	if (x === 0 || y === 0) {
		return 0;
	};
	let nx = getNumbersLength(x);
	let ny = getNumbersLength(y);
	let n = 0;
	if (nx >= ny) {
		n = nx;
	} else {
		n = ny;
	}
	if (n === 1) {
		return x * y;
	}
	if (n % 2 !== 0) {
		n++;
	}
	const a = parseInt(x / Math.pow(10, n/2));
	const b = x % Math.pow(10, n/2);
	const c = parseInt(y / Math.pow(10, n/2));
	const d = y % Math.pow(10, n/2);
	console.log(a, b, c, d);
	const ac = karatsuba(a, c);
	const bd = karatsuba(b, d);
	const acbd = karatsuba(a + b, c + d);
	const adPlusbc = acbd - bd - ac;
	const result = Math.pow(10, n) * ac + Math.pow(10, n/2) * adPlusbc + bd;
	console.log(result);
	return result;

}

const getNumbersLength = (number) => {
	return number.toString().length;
}

const result = karatsuba(7800, 456);
console.log(result, "FINAL RESULT");

