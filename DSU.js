class DSU {
    constructor() {
        this.parent = [];
    }
    build(n) {
        for(var i=0;i<=n;i++) this.parent[i] = i;
    }
    makeSet(ele) {
        this.parent[ele] = ele;
    }
    findSet(ele) {
        if(this.parent[ele] == ele) return ele;
        return this.parent[ele] = this.findSet(this.parent[ele]);
    }
    uniteSet(e1, e2) {
        let par1 = this.findSet(e1);
        let par2 = this.findSet(e2);
        if(par1 != par2) this.parent[e2] = e1;
    }
}