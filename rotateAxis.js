function calcRotationAroundAxis( obj3D, axis, angle ){

    var euler;

    if ( axis === "x" ){
        euler = new THREE.Euler( angle, 0, 0, 'XYZ' );      
    }

    if ( axis === "y" ){
        euler = new THREE.Euler( 0, angle, 0, 'XYZ' );              
    }

    if ( axis === "z" ){
        euler = new THREE.Euler( 0, 0, angle, 'XYZ' );      
    }
    obj3D.position.applyEuler( euler );
}

function calcRotationIn3D( obj3D, angles, order = 'XYZ' ){

   var euler;

   euler = new THREE.Euler( angles.x, angles.y, angles.z, order );

   obj3D.position.applyEuler( euler );

}
