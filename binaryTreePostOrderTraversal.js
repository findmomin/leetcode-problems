/* 
Given the root of a binary tree, return the postorder traversal of its nodes' values.

Example 1:

Input: root = [1,null,2,3]
Output: [3,2,1]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
 
Constraints:

The number of the nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100 
*/
// const postOrderTraversal = root => {
//   const result = [];

//   const traverse = nodeIdx => {
//     let leftChildIdx = 2 * nodeIdx + 1;
//     let rightChildIdx = 2 * nodeIdx + 2;

//     if (root[leftChildIdx] !== undefined) traverse(leftChildIdx);
//     if (root[rightChildIdx] !== undefined) traverse(rightChildIdx);

//     root[nodeIdx] && result.push(root[nodeIdx]);
//   };

//   traverse(0);

//   return result;
// };

const postOrderTraversal = root => {
  const result = [];

  const traverse = node => {
    if (node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      result.push(node.val);
    }
  };

  traverse(root);

  return result;
};

console.log(postOrderTraversal([1, null, 2, 3]));
