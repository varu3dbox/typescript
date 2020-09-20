class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function rangeSumBST(root: TreeNode | null, L: number, R: number): number {
    let result = 0
    const dfs = (node: TreeNode | null) => {
        if (node) {
            if (L <= node.val && node.val <= R) {
                result += node.val
            }
            if (L < node.val) {
                dfs(node.left)
            }
            if (R > node.val) {
                dfs(node.right)
            }
        }
    }
    dfs(root)
    return result
};