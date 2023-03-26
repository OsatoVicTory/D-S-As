class LCA {
    constructor() {
        this.tin = [];
        this.tout = [];
        this.up = [];
        this.adj = [];
        this.timer = 0;
        this.LOG = 1;
    }
    log(n) {
        let lg = 0;
        while((1 << lg) < n) lg++;
        return lg;
    }
    build(adj, n, root = 0) {
        this.adj = adj;
        this.LOG = this.log(n);
        for(var lg=0;lg<=this.LOG;lg++) this.up[lg] = [];
        this.dfs(root, root);
    }
    dfs(node, par) {
        this.up[node][0] = par;
        this.tin[node] = this.timer++;
        for(var l=1;l<=this.LOG;l++) {
            this.up[node][l] = this.up[this.up[node][l-1]][l-1];
        }
        for(var i of this.adj[node]) {
            if(i != par) this.dfs(i, node);
        }
        this.tout[node] = this.timer++;
    }
    isAncestor(n1, n2) {
        return this.tin[n1] <= this.tin[n2] && this.tout[n1] >= this.tout[n2];
    }
    findLCA(node1, node2) {
        if(this.isAncestor(node1, node2)) return node1;
        if(this.isAncestor(node2, node1)) return node2;
        let node = node1;
        for(var t=0;t<=this.LOG;t++) {
            if(!this.isAncestor(node, node2)) node = this.up[node][t];
        }
        return node;
    }
    findKthAncestor(node, k) {
        let nd = node;
        for(var t=0;t<=this.LOG;t++) {
            if(k & (1 << t)) nd = this.up[nd][t];
        }
        return nd;
    }
}