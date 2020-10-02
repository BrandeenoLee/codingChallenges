const normalPaths = new Map();
const conditionallPaths = new Map();
 
function countPatternsFrom(firstDot, length) {
 
    if( length < 1 || length > 9 ){
      return 0;
    }
     init();
 
     const r = countPaths( firstDot , [], 0, length );
 
     return r;
}

const countPaths = ( dot , selected , pathsCount , length ) => {
    
    selected = [...selected,dot] ;
    
    if(length <= selected.length){
      return 1;
    }
    
    const res = [ ];
    
    const nextDots = allPaths(dot , selected);
  
    var t = 0;
    nextDots.forEach( nextDot => { 
      t += countPaths( nextDot , selected,  pathsCount  , length   ); 
    });
 
    return t;
}



const allPaths = (dot ,selected)  => {
    
   
    const paths = conditionallPaths.get(dot);
    const res = [];
    paths.forEach(path =>  {  
       if(selected.includes(path[1]) ){
            res.push(path[0])
        } 
    });
  
    return [...normalPaths.get(dot) ,...res ].filter( dot => selected.indexOf(dot) === -1 );;
}

 

 
const init  = () => {
   normalPaths.set('A' , ['B' , 'D' , 'E' , 'F' , 'H' ]   );
   normalPaths.set('B' , ['A' , 'C' , 'D' , 'E' , 'F' , 'G' , 'I' ] );
   normalPaths.set('C' , ['B' , 'D' , 'E' , 'F' , 'H' ] );
   normalPaths.set('D' , ['A' , 'B' , 'C' , 'E' , 'G' , 'H' , 'I'] );
   normalPaths.set('E' , ['A' , 'B' , 'C' , 'D' , 'F' , 'G' , 'H' , 'I']);
   normalPaths.set('F' , ['A' , 'B' , 'C' , 'E' , 'G' , 'H' , 'I' ] );
   normalPaths.set('G' , ['B' , 'D' , 'E' , 'F' , 'H' ] );
   normalPaths.set('H' , ['A' , 'C' , 'D' , 'E' , 'F' , 'G' , 'I'] );
   normalPaths.set('I' , ['B' , 'D'  ,'E' , 'F' , 'H'] );

    conditionallPaths.set('A' , [ [ 'C' , 'B' ] , ['I' , 'E' ] , ['G' , 'D'] ]);
    conditionallPaths.set('B' , [ [ 'H' , 'E' ]  ]);
    conditionallPaths.set('C' , [ [ 'I' , 'F' ] , [ 'G' , 'E' ] , [ 'A' , 'B' ]]);
    conditionallPaths.set('D' , [ [ 'F' , 'E' ]  ]);
    conditionallPaths.set('E' ,[[]]);
    conditionallPaths.set('F' , [ [ 'D' , 'E' ]  ]);
    conditionallPaths.set('G' , [ ['A' , 'D']  , [ 'C' , 'E' ] , ['I' , 'H' ]   ]);
    conditionallPaths.set('H' , [ [ 'B' , 'E' ]  ]);
    conditionallPaths.set('I' , [ ['C' , 'F']  , [ 'G' , 'H' ] , ['A' , 'E' ]   ]);
 
}

