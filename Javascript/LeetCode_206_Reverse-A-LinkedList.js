
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while(b!=0)
    {
    	// one AND to figure the carry position
    	const carry = a & b;

    	// one XOR to find out the results without carry information
    	a = a ^ b;

    	// one bit shifting
        b = carry << 1;
    }
    return a;
};

console.log(getSum(2,3));
