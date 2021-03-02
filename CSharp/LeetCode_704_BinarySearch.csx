public class Solution {
    public int Search(int[] nums, int target) 
    {
        var start = 0;
        var end = nums.Length - 1;
        return SearchTarget(nums, start, end, target);
    }
    private static int SearchTarget(int[] nums, int start, int end, int target)
        {
            var mid = start + ((end - start) / 2);

            if(start <= end)
            {
                // if the target is found in the middle if the array
                if (target == nums[mid])
                {
                    return mid;
                }
                else if (target > nums[mid])
                {
                    start = mid + 1;
                    return SearchTarget(nums, start, end, target);
                }
                else if (target < nums[mid])
                {
                    end = mid - 1;
                    return SearchTarget(nums, start, end, target);
                }
            }
            
            return -1;
        }
}
