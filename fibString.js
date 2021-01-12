function solve(n) {
    let f = ['0', '01'],
       str = '';
    for (let i = 1; i < n; i++) {
      f.push(f[i] + f[i - 1]);
    }
    return f[n];
  }