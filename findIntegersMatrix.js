function gridIndex(grid, indices) {
    if (!grid.length)
      return "";
    let output = "";
    let ln = grid[0].length;
    indices.forEach(indice => {
      output += grid[Math.floor((indice - 1) / ln)][(indice - 1) % ln];
    });
    return output;
  }

//   const gridIndex = (grid, indices) => {
//     const flattened = grid.flat();
//     return indices.map(i => flattened[i-1]).join('');
//   }