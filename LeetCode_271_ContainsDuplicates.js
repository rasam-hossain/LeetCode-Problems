/**
 * @param {number[]} prices
 * @return {number}
 */

// If any duplicate number -> then true
// otherwise false
// one pass - map
var containsDuplicate = function(nums) {
    const myMap = new Map();
    for(int x : nums)
    {
        if(!myMap.has(nums[i]))
            myMap.set(nums[i], 1);
        else return true;
    }
    return false;
};

nums = [1,1,1,3,3,4,3,2,4,2];
console.log(containsDuplicate(nums));


// can also be done using set
// by definition set doesnt allow duplicates
