// sheet defining function to test function performance

function measureExecutionTime(func, ...args){
    const start = performance.now();
    const result = func(...args);
    const end = performance.now();
    console.log(func, `Execution time: ${end - start} milliseconds`);
    return result;
}

module.exports = {
    measureExecutionTime
};