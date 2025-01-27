/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    const limitFn = async function(...args) {
        const op = fn(...args);
        const cp = new Promise((_, reject) => setTimeout(() => reject("Time Limit Exceeded"), t));
        return Promise.race([cp, op]);
    };

    return limitFn; 
};
