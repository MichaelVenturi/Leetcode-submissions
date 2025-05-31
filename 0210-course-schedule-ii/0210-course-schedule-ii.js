/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
     const adj = Array.from({length: numCourses}, () => []); // what other courses this one is a prereq for
     const indegree = Array.from({length: numCourses}, () => 0);    // how many prereq's each course has

    for(const [c, p] of prerequisites){
        adj[p].push(c);
        indegree[c]++;
    }
    const queue = [];
    for(let i = 0; i < numCourses; i++){
        if(indegree[i] === 0) queue.push(i);    // if course has zero prereqs, we should take it first, add to queue
    }
    const order = [];
    while(queue.length > 0){
        const cur = queue.shift();
        order.push(cur);    // take this course since it either has no prereqs, or we met the prereqs
        for(const next of adj[cur]){ // for each course that this one was a prereq for, decrease their indegree by 1, since we have just taken one
            indegree[next]--;
            if(indegree[next] === 0) queue.push(next);  // if cur course was the last prereq for next, add it to the queue of courses we can take
        }
    }
    if(order.length === numCourses) return order;
    // if order is not the length of numCourses, we couldn't take all the courses, so there is no right order (a cycle)
    return [];
    
};