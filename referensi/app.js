const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, 2, .1, 1500);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.set(0, 0, 900);
var cameraTarget = new THREE.Vector3(0, 0, 0);

var pointLight = new THREE.PointLight(0xffffff, 0);
pointLight.position.set(200, 80, 200);
pointLight.color.setStyle('rgb( 255, 0, 255 )');
scene.add(pointLight);

var reCenterTimeout;
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', function () {
  clearTimeout(reCenterTimeout);
  reCenterTimeout = setTimeout(function () {
    reCenterText();
  }, 2000);
  animate();
});

var typeface = 'https://gist.githubusercontent.com/redwavedesign/43ad5ae24f043a508392a57c06eca996/raw/b1a004c2a662e2d90bb295b20d4247f1dc16a6c4/bebas_regular.json';

var fontLoader = new THREE.FontLoader();
fontLoader.load(typeface, function (response) {
  font = response;
  createText(font);
});

$('#webGL-container').append(renderer.domElement);
bringInText();
function createText(font) {
  geometri = new THREE.TextGeometry('FEBRI', {
    font: font,
    height: 10,
    size: 70,
    curveSegments: 4,
    bevelThickness: 1,
    bevelSize: 1,
    bevelSegments: 3,
    bevelEnabled: true
  });
  material = new THREE.MeshPhongMaterial({color: '#FCFF30'});
  geometri.computeBoundingBox();
  var centerOffset = -0.5 * (geometri.boundingBox.max.x - geometri.boundingBox.min.x);
  mesh = new THREE.Mesh(geometri, material);
  scene.add(mesh);
}

function render() {
  camera.lookAt(cameraTarget);
  renderer.clear();
  renderer.render(scene, camera);
}

function animate() {
  requestAnimationFrame(animate);
  render();
  renderer.render(scene, camera);
}

function bringInText() {
  var introTimeline = new TimelineMax({
    paused: true,
    delay: .1
  });

  introTimeline.to(pointLight, 4, {intensity: 1.6,ease: Power2.easeIn}, '.3')

    .to(camera.position, 3, {
      z: 650
    }, '0')

    .play();

}


function reCenterText() {
  var reCenterTimeline = new TimelineMax({
    paused: true
  });

  reCenterTimeline

    .to(camera.position, 2, {
      x: 0,
      y: 0,
      z: 650
    }, '0')

    .play();

}

// animate
animate();

$(window).resize(function () {
  var winHeight = window.innerHeight,
    winWidth = window.innerWidth;
  camera.aspect = winWidth / winHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(winWidth, winHeight);

});
