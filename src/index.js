module.exports = function reverse (n) {
    const nStr = String(n);
    let response = '';

    for (let i = nStr.length - 1; i >= 0; i--) {
        if (nStr[i] === '-') {
            continue;
        }
        response += nStr[i];
    }
    
    return Number(response);
}
