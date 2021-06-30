const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 1000);
const canvas = document.getElementById('myCanvas');
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
camera.position.z = 100;
renderer.setPixelRatio(window.devicePixelRatio)
const geometri = new THREE.SphereGeometry(1, 30, 15);
const material = new THREE.MeshNormalMaterial({ wireframe: true });
const sphere = new THREE.Mesh(geometri, material);
const geometri2 = new THREE.SphereGeometry(0.5, 30, 15);
const material2 = new THREE.MeshNormalMaterial({});
const mesh = new THREE.Mesh(geometri2, material2);
scene.add(sphere);
scene.add(mesh);
let controls = new THREE.OrbitControls(camera, renderer.domElement);

let running = true;
function display() {
  if (running) {
    requestAnimationFrame(display);
    camera.position.z -= 1;
    renderer.render(scene, camera);
  }
  if(camera.position.z == 4) {
    running = false
  }
}

function update() {
  requestAnimationFrame(update);
  sphere.rotation.x += 0.004;
  sphere.rotation.y += 0.005;
  sphere.rotation.z += 0.006;
  renderer.render(scene, camera);
}
display()
update()


// main();


// const segitigakiri = new THREE.BufferGeometry();
// const segitigakanan = new THREE.BufferGeometry();
// let vertices = new Float32Array([
//   -1.0, -1.0, 1.0,  // 0
//   1.0, 1.0, 1.0,    // 1
//   -1.0, 1.0, 1.0,   // 2
//   1.0, -1.0, 1.0,   // 3
//   -1.0, -1.0, -1.0, // 4
//   1.0, 1.0, -1.0,   // 5
//   -1.0, 1.0, -1.0,  // 6
//   1.0, -1.0, -1.0   // 7
// ]);
// let colors = new Float32Array([
//   //  R   G    B
//   1.0, 0.0, 0.0,  // 0
//   1.0, 1.0, 0.0,  // 1
//   1.0, 0.0, 1.0,  // 2
//   0.0, 1.0, 1.0,  // 3
//   1.0, 0.0, 0.0,  // 4
//   1.0, 1.0, 0.0,  // 5
//   1.0, 0.0, 0.0,  // 6
//   0.0, 1.0, 1.0,  // 7
// ]);
// segitigakiri.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
// segitigakiri.setAttribute('color', new THREE.BufferAttribute(colors, 3));
// segitigakanan.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
// segitigakanan.setAttribute('color', new THREE.BufferAttribute(colors, 3));

// segitigakiri.setIndex([
//   // sisi depan
//   1, 2, 0,
//   // sisi belakang
//   5, 6, 4,
//   // sisi kiri
//   4, 0, 2,
//   2, 6, 4,
//   // sisi atas
//   1, 5, 6,
//   6, 2, 1,
//   // sisi kanan diagonal
//   5, 1, 0,
//   0, 4, 5,
// ]);
// segitigakanan.setIndex([
//   // sisi depan
//   3, 1, 0,
//   // sisi belakang
//   7, 5, 4,
//   // sisi kanan
//   5, 1, 3,
//   3, 7, 5,
//   // sisi bawah
//   0, 4, 7,
//   7, 3, 0,
//   // sisi kiri diagonal
//   1, 5, 0,
//   0, 5, 4,
// ]);

// const material = new THREE.MeshBasicMaterial({ vertexColors: THREE.VertexColors });
// const materiil = new THREE.MeshBasicMaterial({ vertexColors: THREE.VertexColors });
// let kiri = new THREE.Mesh(segitigakiri, material);
// let kanan = new THREE.Mesh(segitigakanan, materiil);
// scene.add(kiri);
// scene.add(kanan);
// camera.position.z = 10;
// kiri.position.x = -2;
// kanan.position.x = 1;

// function update() {
//   kiri.rotation.y += 0.01;
//   kiri.rotation.x += 0.01;
//   kanan.rotation.y += 0.01;
//   kanan.rotation.x += 0.01;
//   requestAnimationFrame(update);
//   renderer.render(scene, camera);
// }
// update()