import * as THREE from 'three';

let camera, scene, renderer;
const fishes = [];

function init() {
    const container = document.getElementById('scene-container');

    // Camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / 150, 0.1, 1000);
    camera.position.z = 30; // Pulled camera back for a wider view
    camera.position.y = 4;  // Moved camera up to see the scene better
    camera.lookAt(0, 0, 0);

    // Scene
    scene = new THREE.Scene();
    // Add a subtle fog for depth
    scene.fog = new THREE.Fog(0x000000, 20, 60);


    // Renderer
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, 150);
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(5, 10, 7.5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    
    // Add a soft blue light from below
    const hemisphereLight = new THREE.HemisphereLight(0xadd8e6, 0x080820, 1);
    scene.add(hemisphereLight);


    // Fish
    const fishMaterial = new THREE.MeshPhongMaterial({ shininess: 100, side: THREE.DoubleSide });

    for (let i = 0; i < 15; i++) { // Increased number of fish
        const fish = new THREE.Group();

        const bodyGeometry = new THREE.CapsuleGeometry(1.2, 2.5, 8, 16);
        const body = new THREE.Mesh(bodyGeometry, fishMaterial.clone());
        body.rotation.z = -Math.PI / 2;
        fish.add(body);

        const tailGeometry = new THREE.CylinderGeometry(0, 0.8, 2, 8);
        const tail = new THREE.Mesh(tailGeometry, fishMaterial.clone());
        tail.position.x = -2.2;
        tail.rotation.z = -Math.PI / 2;
        fish.add(tail);

        // Randomize fish color (shades of orange, red, yellow)
        const hue = 0.05 + Math.random() * 0.1;
        const saturation = 0.9;
        const lightness = 0.5;
        body.material.color.setHSL(hue, saturation, lightness);
        tail.material.color.setHSL(hue, saturation, lightness);

        const scale = 0.5 + Math.random() * 0.5;
        fish.scale.set(scale, scale, scale);
        
        const goesRight = Math.random() > 0.5;
        fish.userData.speed = (Math.random() * 0.05 + 0.03) * (goesRight ? 1 : -1);
        
        if (!goesRight) {
            fish.rotation.y = Math.PI;
        }

        fish.position.x = (Math.random() * 2 - 1) * 35;
        fish.position.y = (Math.random() * 2 - 1) * 5;
        fish.position.z = (Math.random() * 2 - 1) * 5;
        
        fish.userData.bob = Math.random() * 0.15;
        fish.userData.tailSpeed = Math.random() * 0.5 + 0.3;

        fishes.push(fish);
        scene.add(fish);
    }


    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / 150;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, 150);
}

function animate() {
    requestAnimationFrame(animate);
    const time = Date.now() * 0.001;

    fishes.forEach(fish => {
        fish.position.x += fish.userData.speed;
        fish.position.y += Math.sin(time * 2 + fish.position.x * 0.1) * fish.userData.bob;

        fish.children[1].rotation.y = Math.sin(time * 5 * fish.userData.tailSpeed) * 0.7;
        
        const worldBoundary = 40;

        if (fish.userData.speed > 0 && fish.position.x > worldBoundary) {
            fish.position.x = -worldBoundary;
        } else if (fish.userData.speed < 0 && fish.position.x < -worldBoundary) {
            fish.position.x = worldBoundary;
        }
    });


    renderer.render(scene, camera);
}

init();
animate();