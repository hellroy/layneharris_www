import React, {
    Component
} from 'react';

import * as THREE from "three";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default class About extends Component {
    render() {

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({
            color: 0x00ff00
        });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        camera.position.z = 5;


        const animate = function () {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        };


        // const loader = new GLTFLoader();

        // let mixer;
        // let model;

        // //let modelReady = false;

        // // Load a glTF resource
        // loader.load(
        //     // resource URL
        //     'models/layne.glb',
        //     // called when the resource is loaded
        //     (gltf) => {

        //         mixer = new THREE.AnimationMixer(gltf.scene);

        //         //scene.add(gltf.scene);

        //         gltf.animations; // Array<THREE.AnimationClip>
        //         gltf.scene; // THREE.Group
        //         gltf.scenes; // Array<THREE.Group>
        //         gltf.cameras; // Array<THREE.Camera>
        //         gltf.asset; // Object

        //         var SManimations = gltf.animations;

        //         if (SManimations && SManimations.length) {

        //             for (var i = 0; i < SManimations.length; i++) {
        //                 console.log(SManimations[i].name)
        //                 var SManimation = SManimations[i];
        //                 var SMaction = mixer.clipAction(SManimation);
        //                 SMaction.play();
        //             }
        //         }

        //         gltf.scene.position.x = position.x;
        //         gltf.scene.position.y = position.y;
        //         gltf.scene.position.z = position.z;

        //         //gltf.scene.rotation.y = rotation;

        //         //gltf.scene.scale.set(1, 1, 1) // scale here
        //         model = gltf.scene;
        //         model.castShadow = true;
        //         model.receiveShadow = true;
        //         //worldOctree.fromGraphNode( model );

        //         this.modelReady = true;

        //         scene.add(model);

        //     },
        //     // called while loading is progressing
        //     function (xhr) {
        //         console.log((xhr.loaded / xhr.total * 100) + '% funhouse loaded');
        //     },
        //     // called when loading has errors
        //     function (error) {
        //         console.log('A Funhouse error happened');
        //     },

        // );

        animate();

        return ('');

    }
}