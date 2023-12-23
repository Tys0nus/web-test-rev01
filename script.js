// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3;
camera.position.y = 1;

// Create a cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xf4a261 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Directional light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 1, 2);
scene.add(light);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Mouse interaction
let mouseX = 0;

window.addEventListener('mousemove', (event) => {
  mouseX = event.clientX;
});

// Render loop
function animate() {
  requestAnimationFrame(animate);

  // Update cube rotation based on mouse movement
  cube.rotation.y += (mouseX - window.innerWidth / 2) * 0.001;

  renderer.render(scene, camera);
}

animate();
