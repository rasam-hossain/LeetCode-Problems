/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

 // This section is taken from a discussion comment
 /*
        xor (^) produces the sum result without condidering carry bit
        eg    2+3 = 5 (actual addition will be 0101)
        
        Answer = Sum intermediate (part A) + carry ans (part B)
        
        0010
        0011 (^ xor-ing)
        ----
        0001  part A - sum ans 
        ----
        
        and (&) produces the carry inducing bit positions

        0010
        0011 (& and-ing)
        ----
        0010  - carry intermediate
        ----
        
        - left shifting to actual pos -> 0100 - part B - carry actual
        
        iterate again - with part A & part B until part B is 0 (means no carry value)
        
        A - sum value
        B - carry value
        
*/
 

/*


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


*/ 


var getSum = function(a, b) {
    while(b!=0)
    {
        //find the sum temp result without the carry
        xorsum = a ^ b;

        // find the carry creating bit additions and left shit it
        b = a & b;
        b = b << 1;

        // reassign to a
        a = xorsum;
    }
    return a;
};

console.log(getSum(5,7));
