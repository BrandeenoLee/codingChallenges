function streetFighterSelection(fighters, position, moves){
    var result = [];
    
    moves.forEach(function(move) {
      if (move === "up") {
        position[0] = 0;
      }
      else if (move === "down") {
        position[0] = 1;
      }
      else if (move === "right") {
        position[1] = (position[1] === 5) ? 0 : position[1] + 1;
      }
      else if (move === "left") {
        position[1] = (position[1] === 0) ? 5 : position[1] - 1;
      }
      
      result.push(fighters[position[0]][position[1]]);
    });

    // function streetFighterSelection(fighters, position, moves){

    //     const boundY = fighters.length - 1;
    //     const boundX = fighters[0].length - 1;
      
    //     let [y, x] = position;
      
    //     const controls = {
    //       right: () => x === boundX ? x = 0 : x++,
    //       left: () => x ? x-- : x = boundX,
    //       up: () => y ? y-- : y,
    //       down: () => y < boundY ? y++ : y
    //     };
        
    //     return moves.map(move => {
    //       controls[move]();
    //       return fighters[y][x];
    //     });
    //   }

    // const streetFighterSelection = (fighters, [i, j], moves) => {
    //     return moves.map(move => {
    //       if (move === 'up')    i = Math.max(i - 1, 0);
    //       if (move === 'down')  i = Math.min(i + 1, 1);
    //       if (move === 'left')  j = (j - 1 + 6) % 6;
    //       if (move === 'right') j = (j + 1 + 6) % 6;
          
    //       return fighters[i][j];
    //     });
    //   };