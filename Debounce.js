/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timerTrack 
    return function(...args) {
        clearTimeout(timerTrack)
        timerTrack = setTimeout(()=>{
            fn.apply(this,args)
        },t)

    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */