import * as THREE from 'three';
// game.stage
export function getRootContainer() {
  
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 75, 400 / 400 , 0.1, 1000 );
  camera.position.z = 30


  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( 400, 400 );
  document.body.appendChild( renderer.domElement );

  var animate = function () {
    
    //console.log('camera.position.z',camera.position.z);
    if(camera.position.z>=1){
      camera.position.z -= .05;
      camera.rotation.z +=.05

    }else{
      camera.position.z =30
      camera.rotation.z =0
    }
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
  };
  animate()
  

  return scene 
}
