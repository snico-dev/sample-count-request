
var count = 0;
var interval = null;

exports.start = () => {
    interval = setInterval(() => {
        count += 1;
    }, 1);
}

exports.reset = () => {
    count = 0;
}

exports.stop = () => {
    clearInterval(interval);
}

exports.getCount = () => {
    return count / 1000;
}