const Stack = require('./lecture2');

const stack = new Stack();
const text = 'HELLO';

for (let i = 0; i < text.length; i++) {
	stack.push(text.charAt[i]);
}

let reverseText = '';

while (!stack.isEmpty()) {
	reverseText += stack.pop();
}
console.log(reverseText);