import * as THREE from 'three';

let camera, scene, renderer;
const fishes = [];

function init() {
    const container = document.getElementById('scene-container');

    // Camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / 150, 0.1, 1000);
    camera.position.z = 20;
    camera.position.y = 2;

    // Scene
    scene = new THREE.Scene();

    // Renderer
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, 150);
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Fish
    const fishMaterial = new THREE.MeshPhongMaterial({ color: 0x0080ff, shininess: 80 });

    for (let i = 0; i < 15; i++) {
        const fishGroup = createFish(fishMaterial);
        fishGroup.position.x = Math.random() * 80 - 40;
        fishGroup.position.y = Math.random() * 10 - 5;
        fishGroup.position.z = Math.random() * 10 - 5;
        fishGroup.rotation.y = Math.random() * Math.PI * 2;
        scene.add(fishGroup);
        fishes.push({
            group: fishGroup,
            speed: Math.random() * 0.05 + 0.02,
            initialY: fishGroup.position.y
        });
    }


    window.addEventListener('resize', onWindowResize);
    animate();
}

function createFish(material) {
    const group = new THREE.Group();

    // Body
    const bodyGeometry = new THREE.CapsuleGeometry(0.5, 1, 4, 8);
    const body = new THREE.Mesh(bodyGeometry, material);
    body.rotation.z = -Math.PI / 2;
    group.add(body);

    // Tail
    const tailGeometry = new THREE.CylinderGeometry(0.05, 0.2, 0.8, 4);
    const tail = new THREE.Mesh(tailGeometry, material);
    tail.position.x = -1.0;
    tail.rotation.z = Math.PI / 2;
    group.add(tail);

    return group;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / 150;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, 150);
}

function animate() {
    requestAnimationFrame(animate);

    const time = Date.now() * 0.0005;

    fishes.forEach((fishData, i) => {
        const { group, speed, initialY } = fishData;
        group.position.x += speed;
        group.position.y = initialY + Math.sin(time * 2 + i) * 0.5; // Bobbing motion
        
        // Tail animation
        const tail = group.children[1];
        if (tail) {
            tail.rotation.y = Math.sin(time * 10 + i) * 0.5;
        }


        if (group.position.x > 40) {
            group.position.x = -40;
            group.position.y = Math.random() * 10 - 5;
            fishData.initialY = group.position.y;
        }
    });

    renderer.render(scene, camera);
}

init();
