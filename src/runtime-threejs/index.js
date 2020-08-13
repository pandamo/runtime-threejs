import { createRenderer } from "@vue/runtime-core";
import * as THREE from 'three';
//console.log('THREE: ', THREE);
 
//var camera, scene, renderer;
//var geometry, material, mesh;

/* 
// createRenderer 的options
insert
remove
patchProp
forcePatchProp
createElement
createText
createComment
setText
setElementText
parentNode
nextSibling
setScopeId
cloneNode 
*/


const renderer = createRenderer({
  createElement(type) {
    let element
    if(type==='cube'){
      var geometry = new THREE.BoxGeometry(1, 1, 1);
      var material = new THREE.MeshBasicMaterial({
        color: 0x00ff00
      });
      element = new THREE.Mesh(geometry, material);
      
    } 
    if(type==='line'){
      var geometry = new THREE.BoxGeometry(2, 2, 2);
      var material=new THREE.LineBasicMaterial({
        color:0xffffff
    });    
      element=new THREE.Line(geometry,material);
    }
    return element
  },
  insert(el,parent){
    parent.add(el)    
  }
})
export function createApp(rootComponent) {
  console.log('rootComponent: ', rootComponent);
  return renderer.createApp(rootComponent);
}