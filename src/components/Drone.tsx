import * as THREE from "three";
import { GLTFLoader, GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import gsap from "gsap";

export function init() {
  const loader = new GLTFLoader();
  const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10
  );
  camera.position.set(0, 0, 10);
  const scene = new THREE.Scene();

  const light = new THREE.AmbientLight(0xffffff, 8);
  scene.add(light);

  let model: THREE.Object3D;

  loader.load("/models/scene.gltf", (gltf: GLTF) => {
    model = gltf.scene;
    model.scale.set(0.01, 0.01, 0.01);
    model.position.set(0, 0.5, 1);
    model.rotation.set(0, 0, Math.PI / 6);

    gsap.to(model.scale, {
      x: 0.4,
      y: 0.4,
      z: 0.4,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(camera.position, {
      z: 5,
      delay: 0.5,
      duration: 1,
      ease: "power2.out",
    });

    scene.add(model);
  });

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("drone")?.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.rotateSpeed = 0.7;

  const positions = [
    {
      id: "hero",
      pos: { x: 0, y: 0.5, z: 1 },
      rot: { x: 0, y: 0, z: Math.PI / 6 },
    },
    {
      id: "about",
      pos: { x: 1, y: -0.25, z: 3 },
      rot: { x: 0, y: 0, z: Math.PI / 4 },
    },
    {
      id: "ready",
      pos: { x: -1, y: -0.25, z: 2.5 },
      rot: { x: Math.PI / 4, y: Math.PI / 4, z: Math.PI / 4 },
    },
  ];

  const sections = document.querySelectorAll(".section");
  let currentSection: string = "";

  window.addEventListener("scroll", () => {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 3) {
        currentSection = section.id;
      }
    });

    if (model && currentSection) {
      const activePosition = positions.find((val) => val.id === currentSection);
      if (activePosition) {
        gsap.to(model.position, {
          x: activePosition.pos.x,
          y: activePosition.pos.y,
          z: activePosition.pos.z,
          duration: 1,
          ease: "power2.inOut",
        });

        gsap.to(model.rotation, {
          x: activePosition.rot.x,
          y: activePosition.rot.y,
          z: activePosition.rot.z,
          duration: 1,
          ease: "power2.inOut",
        });

        gsap.to(model.position, {
          y: activePosition.pos.y,
          duration: 1.5,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.to(model.position, {
              y: activePosition.pos.y - 0.01,
              duration: 1.5,
              repeat: -1,
              yoyo: true,
              ease: "power2.inOut",
            });
          },
        });
      }
    }
  });

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  function animate() {
    controls.update();
    renderer.render(scene, camera);
  }

  renderer.setAnimationLoop(animate);
}
