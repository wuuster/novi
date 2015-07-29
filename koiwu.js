function p(s, o, c) {
    if (c === 0 && s !== '') {
        result.push(s);
    } else {
        if (o > 0) {
            p(s + '(', o - 1, c);
        }
        if (o < c) {
            p(s + ')', o, c - 1);
        }
    }
}
function m(n) {
    p('', n, n, result = [
    ]);
    return result;
}
m(5);
