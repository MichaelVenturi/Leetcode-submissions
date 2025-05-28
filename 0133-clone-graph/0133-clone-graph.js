/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if(!node) return null;
    const visited = {};
    function helper(node) {
        if(visited[node.val]) return visited[node.val];
        let clone = new Node(node.val);
        visited[node.val] = clone;
        clone.neighbors = node.neighbors.map(neighbor => helper(neighbor));
        return clone;
    }
    return helper(node);
};