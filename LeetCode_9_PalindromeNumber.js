/**
 * @param {number} x
 * @return {boolean}
 */
//bvar x = 101;
var isPalindrome = function(x) {

    if(x < 0 || (x % 10 == 0 && x != 0))
        return false;

    var reverse = 0;
    while(reverse < x){
        reverse = (reverse * 10) + (x % 10);
        x = ~~(x/10);
        console.log(x);
    }
    return x === reverse || x === ~~(reverse/10);
};


console.log(isPalindrome(12321));

