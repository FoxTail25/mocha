const operation = require('./operation');

it('should multiply two numbers', function(){
	const expectResult = 15;
	const result = operation.multipli(3,5);
	if(result !== expectResult){
		throw new Error(`Expected ${expectedResult}, but got ${result}`)
	}
})
it('should add two numbers', function(){
	const expectResult = 8;
	const result = operation.add(3,5);
	if(result !== expectResult){
		throw new Error(`Expected ${expectedResult}, but got ${result}`)
	}
})