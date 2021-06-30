const width = 535;
const height = 400;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 500);
const renderer = new THREE.WebGLRenderer({ canvas: myCanvas, alpha: true });

renderer.setSize(width, height);