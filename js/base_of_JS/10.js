let num = 10

const pureSum = a => num += a

console.log(pureSum(5))
console.log(pureSum(5))
console.log(pureSum(5))

const notPureSum = a => a += Math.random()

console.log(notPureSum(5))
console.log(notPureSum(5))
console.log(notPureSum(5))

console.log(4 - "5" + 0xf - "1e1")
console.log(4 - "5")
console.log(4 - "5" + 0xf)
console.log(4 - "5" + 0xf - "1e1")
console.log(1e1)


console.log(parseInt("1px"))
console.log(parseInt("-1.2"))
console.log(parseInt("0 минут"))
console.log(parseInt("$1.2"))

console.log(20e-1['toString'](2))

let a = [1, 2]

	(function () { alert(a) })()

let obj = { '1': 0, 1: 1, 0: 2 };
console.log(obj)


let f = new Function("a", "b", "return a+b")

console.log(0 || 1 && 2 || 3)

let obj = {
	"0": 1,
	0: 2
};

console.log(obj["0"] + obj[0]);

function f() {
	let a = 5;
	return new Function('b', `return ${a} + b`);
}

console.log(f()(1));
