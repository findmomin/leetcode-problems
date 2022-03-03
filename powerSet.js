/* 
Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.
 
Example 1:

Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
  
Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
*/
const powerSet = nums => {
  const result = [];

  nums.sort((a, b) => a - b);

  let dfs = (nums, index, path) => {
    result.push(path);

    for (let i = index; i < nums.length; i++) {
      if (i > index && nums[i] === nums[i - 1]) continue;

      dfs(nums, i + 1, path.concat(nums[i]));
    }
  };

  dfs(nums, 0, []);

  return result;
};

console.log(powerSet([1, 2, 2]));
