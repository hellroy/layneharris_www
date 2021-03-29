import React, {
    Component
} from 'react';


import * as THREE from "three";
import {
    GLTFLoader
} from "three/examples/jsm/loaders/GLTFLoader";

export default class About extends Component {
    render() {

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer( {antialias: true});
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        camera.position.z = 5;

        const loader = new GLTFLoader();

        const light = new THREE.AmbientLight(0xFF00FF); // soft white light
        scene.add(light);

        //let mixer;
        let model;

        var modelReady = false;

        // Load a glTF resource
        loader.load(
            // resource URL
            'models/layne.glb',
            // called when the resource is loaded
            (gltf) => {

                //mixer = new THREE.AnimationMixer(gltf.scene);

                //scene.add(gltf.scene);

                // gltf.animations; // Array<THREE.AnimationClip>
                // gltf.scene; // THREE.Group
                // gltf.scenes; // Array<THREE.Group>
                // gltf.cameras; // Array<THREE.Camera>
                // gltf.asset; // Object

                // var SManimations = gltf.animations;

                // if (SManimations && SManimations.length) {

                //     for (var i = 0; i < SManimations.length; i++) {
                //         console.log(SManimations[i].name)
                //         var SManimation = SManimations[i];
                //         var SMaction = mixer.clipAction(SManimation);
                //         SMaction.play();
                //     }
                // }

                //gltf.scene.rotation.y = rotation;

                gltf.scene.scale.set(0.05, 0.05, 0.05) // scale here
                model = gltf.scene;
                model.castShadow = true;
                model.receiveShadow = true;
                //worldOctree.fromGraphNode( model );

                scene.add(model);

                modelReady = true

            },
            // called while loading is progressing
            function (xhr) {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            // called when loading has errors
            function (error) {
                console.log('A error happened');
            },

        );

        const animate = function () {
            requestAnimationFrame(animate);

            if (modelReady) {

                //model.rotation.x += 0.01;
                model.rotation.y += 0.01;
            }

            renderer.render(scene, camera);
        };

        animate();

        return (<React.Fragment></React.Fragment>);

    }
}