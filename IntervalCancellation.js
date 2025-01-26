/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    fn(...args);

    const intervalID = setInterval(() => fn(...args), t);
    const clearFn = () => clearInterval(intervalID);

    return clearFn;
};
