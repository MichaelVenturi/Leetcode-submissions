/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = [asteroids[0]];
    for(let i = 1; i < asteroids.length; i++){
        const prev = stack[stack.length - 1];
        const cur = asteroids[i];
        if(!stack.length || prev < 0 || cur > 0) stack.push(cur);
        else if(-cur === prev) stack.pop();
        else if(-cur > prev) {
            stack.pop();
            i--;
        }
    }
    return stack;
};