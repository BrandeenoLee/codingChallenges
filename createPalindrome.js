function solve(s) {
    const middle = s.length / 2;
  
    for (let i = 0; i < middle; i++) {
      const first = s[i].charCodeAt()
      const last = s[s.length - (i + 1)].charCodeAt()
      const distance = Math.abs(last - first)
      if (distance > 2 || distance === 1) return false
    }
    return true
  }