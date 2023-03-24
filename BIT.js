class FenwickTree {
    constructor() {
        this.fen = [];
        this.n = 1;
    }
    init(n, val = 0) {
        for(var i=0;i<=n;i++) this.fen[i] = val;
        this.n = n;
    }
    upd(i, val) {
        let idx = i;
        while(idx <= this.n) {
            this.fen[idx] += val;
            idx += (idx & -idx);
        }
    }
    sum(i) {
        let res = 0, idx = i;
        while(idx > 0) {
            res += this.fen[idx];
            idx -= (idx & -idx);
        }
    }
    query(l, r) {
        return this.sum(r) - this.sum(l-1);
    }
}

//Usage to find range sum
const a = [1,1,3,5,6,2,3]
let n = a.length;
let fn = new FenwickTree();
fn.init(n)
for(var i=0;i<n;i++) fn.upd(i+1, a[i]);
console.log(fn.query(5, 5));