import * as THREE from "three";

const image = new Image();
const texture = new THREE.Texture(image);

image.onload = () => {
  texture.needsUpdate = true;
};

image.src = "/static/captura.png";

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

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ map: texture });
const cube = new THREE.Mesh(geometry, material);
for (var i = 0; i < 200; i++) {
  scene.add(cube);
}
const light = new THREE.DirectionalLight(0xfffffff, 0.5);
light.position.set(-2, 3, 1);
scene.add(light);

const helper = new THREE.DirectionalLightHelper(light, 1);
scene.add(helper);

camera.position.z = 5;

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
  cube.position.z += 0.01;

  if (cube.position.x > 3) {
    cube.position.x -= 0.01;
  }
  if (cube.position.y > 2) {
    cube.position.y -= 0.01;
  }

  renderer.render(scene, camera);
}
