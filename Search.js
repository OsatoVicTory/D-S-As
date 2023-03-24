/**  
 * Principle, is used to search input in form 
 *      /\
 *     /  \
 *    /    \
 * i.e the input has local max or min in just one point or region
 * this sample is targetted at maximum
 * consider split points l < m1 < m2 < r
 * if fn(m1) < fn(m2), then max or optimal answer cannot be to left of m1 i.e [l, m1], so shift l -> m1
 * if fn(m1) > fn(m2), then max or opt ans cannot be to right of m2 i.e [m2, r], so shift r => r -> m2;
 * if fn(m1) == fn(m2), means ans is between range, so can either shift r->m2, or l -> m1;
 * 
 * fn in function argument below indicate the function we use get value at the points
 * */
const ternarySearch = (fn, l, r) => {
    let L = l, R = r;
    while(L <= R) {
        let m1 = L + Math.floor((R - L) / 3);
        let m2 = R - Math.floor((R - L) / 3);
        if(fn(m1) < fn(m2)) L = m1;
        else R = m2;
    }
    return fn(L);
}