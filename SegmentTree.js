class SegmentTree {
    constructor() {
        this.st = [];
        this.n = 0;
        this.inf = 10000000000000;
    }

    init(n, val = this.inf) {
        for(var i=0;i<=4*n;i++) this.st[i] = val;
        this.n = n;
    }
    upd(v, l, r, pos, val) {
        if(l == r) this.st[v] = l;
        else {
            let m = (l + r) >> 1;
            if(pos <= m) this.upd(v*2, l, m, pos, val);
            else this.upd((v*2)+1, m+1, r, pos, val);

            this.st[v] = min(this.st[v*2], this.st[(v*2)+1]);
        }
    }
    querier(v, l, r, s, e) {
        if(l > e || r < s) return inf;
        if(l >= s && r <= e) return this.st[v];
        let m = (l + r) >> 1;
        let LHS = this.querier(v*2, l, m, s ,e);
        let RHS = querier((v*2)+1, m+1, r, s, e);
        return min(LHS, RHS);
    }
    query(l, r) {
        return this.querier(1, 0, this.n-1, l, r);
    }
}

// Usage to find range min
const a = [3,1,5,6,2,3];
let n = a.length;
let st = new SegmentTree();
st.init(n);
for(var i=0;i<n;i++) st.upd(1, 0, n-1, i, a[i]);
console.log(st.query(3, 5));