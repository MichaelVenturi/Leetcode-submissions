/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const adj = {};
    for(const [c, p] of prerequisites){
        if(!adj[p]) adj[p] = [];
        adj[p].push(c);
    }
    const visited = Array.from({length: numCourses}, () => 0);

    for(let i = 0; i < numCourses; i++){
        if(hasCycle(i)) return false;

    }
    return true;

    function hasCycle(course){
        if(visited[course] === 1) return true;
        if(visited[course] === 0) {
            visited[course]++;
            if(!adj[course]){ 
                visited[course] = 2;
                return false;}
            for(const edge of adj[course]){
                if (hasCycle(edge)) return true;
            }   
        }
        visited[course] = 2;
        return false;
    }
    
};