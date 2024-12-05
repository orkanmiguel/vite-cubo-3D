import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.3,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 3);
const material = new THREE.MeshBasicMaterial({ color: "brown" });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

import WebGL from "three/addons/capabilities/WebGL.js";

if (WebGL.isWebGL2Available()) {
  // Initiate function or other initializations here
  animate();
} else {
  const warning = WebGL.getWebGL2ErrorMessage();
  document.getElementById("container").appendChild(warning);
}

function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.position.x += 0.01;
  cube.position.y += 0.01;

  if (cube.position.x > 3) {
    cube.position.x -= 0.01;
  }
  if (cube.position.y > 2) {
    cube.position.y -= 0.01;
  }

  renderer.render(scene, camera);
}
