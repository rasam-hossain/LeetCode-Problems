/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 // nums = [2, 7, 11, 15], target = 9
 // returns array with two elements [index1, index2]

 // special case 1: empty array
 // special case 2:  array that doesn't add up to the target: [1,1]
 // [2,7,2,7] => [0,1]


 ///*** first method ***/// 
 // try creating a brute-force method
 // O(n^2)


 ///*** second method***///
 // using javascript Map
 // only one pass O(n)

var twoSum = function(nums, target) 
{
    const comp = new Map();
    const len = nums.length;

    for (var i = 0; i < len; i++) 
    {
    	if(comp[nums[i]] >= 0)
    	{
    		return [comp[nums[i]], i];
    	}
    	comp[target - nums[i]] = i;
    }
    return [];
};

const nums = [2, 7, 11, 15];
console.log(twoSum(nums, 9));