const PriorityQueue = require("js-priority-queue");

const mt_rand = (min, max) => {
    const argc = arguments.length
    if (argc === 0) {
        min = 0
        max = 2147483647
    } else if (argc === 1) {
        throw new Error('Warning: mt_rand() expects exactly 2 parameters, 1 given')
    } else {
        min = parseInt(min, 10)
        max = parseInt(max, 10)
    }
    return Math.floor(Math.random() * (max - min + 1)) + min
};
const shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
};
const makeTree = (n) => {
    if (n === 1) return [];
    if (n === 2) return [[1, 2]];

    let a = new Array(n - 2), deg = new Array(n + 1);
    for (let i = 0; i < n - 2; i++) a[i] = mt_rand(1, n);
    for (let i = 0; i <= n; i++) deg[i] = 0;
    for (let i of a) deg[i]++;

    let res = [];
    let pq = new PriorityQueue({
        comparator: function (a, b) {
            return b - a;
        }
    });
    for (let i = 1; i <= n; i++) if (!deg[i]) pq.queue(i);
    for (let i of a) {
        let j = pq.dequeue();
        res.push([Math.min(i, j), Math.max(i, j)]);
        if (!--deg[i]) pq.queue(i);
    }
    let u = pq.dequeue();
    let v = pq.dequeue();
    res.push([Math.min(u, v), Math.max(u, v)]);
    return res;
};
const makeConnectedGraph = (n, m) => {
    m -= n - 1;
    let tree = makeTree(n);
    let vis = {};
    for (let [a, b] of tree) vis[[a, b]] = 1;
    while (m--) {
        let a = mt_rand(1, n - 1);
        let b = mt_rand(a + 1, n);

        if (vis[[a, b]] === undefined) {
            vis[[a, b]] = 1;
            tree.push([a, b]);
        } else m++;
    }

    return tree;
};

module.exports = {
    mt_rand,
    shuffle,
    makeTree,
    makeConnectedGraph,
};
