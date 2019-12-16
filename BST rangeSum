var rangeSumBST = function(root, L, R) {
    let sum = 0;
    if(root == null) {
        return 0;
    }
    if(L <= root.val && root.val <= R) {
        sum = root.val;
    }
    
    if(L <= root.val || R <= root.val) {
       sum += rangeSumBST(root.left, L, R);
   } 
   if(root.val <= L || root.val <= R){
       sum += rangeSumBST(root.right, L, R);
   }
    return sum    
