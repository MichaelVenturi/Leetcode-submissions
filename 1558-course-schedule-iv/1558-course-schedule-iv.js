/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function(numCourses, prerequisites, queries) {
    const adj = Array.from({length: numCourses}, () => []);
    const indegree = new Array(numCourses).fill(0);
    for(const [p, c] of prerequisites){ // make list of each class and everything its a prereq for
        adj[p].push(c);
        indegree[c]++;  // track how many prereqs a class has
    };

    const q = [];
    for(let i = 0; i < numCourses; i++)
        if(indegree[i] === 0) q.push(i); // push all classes with no prereqs

    // opposite of adj:  track all prereqs for each course, including indirect prereqs
    const map = Array.from({length: numCourses}, () => new Set()); // empty sets, so we don't add the same course twice

    while(q.length > 0){
        const cur = q.shift();
        for(const next of adj[cur]){ // for each course that cur is a prereq for
            map[next].add(cur); // add cur to the next course's list of prereqs

            for(const pre of map[cur]) // for each prereq of the cur course
                map[next].add(pre); // add that prereq to the next course's list of prereqs as well
            if(--indegree[next] === 0) q.push(next); // if any course now has no prereqs, add to queue
        }
    }
    return queries.map(([u, v]) => map[v].has(u)); // for each query, check if course v has u as a prereq
};