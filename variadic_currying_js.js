function sum (n) {
    var v = x => sum (n + x);
    v.valueOf = () => n; 
    return v;
}

console.log(+sum(1)(2)(3)(4));
