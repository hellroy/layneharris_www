import React, {
    Component
} from 'react';

import * as THREE from "three";
import {
    GLTFLoader
} from "three/examples/jsm/loaders/GLTFLoader";


import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader.js';
import { DotScreenShader } from 'three/examples/jsm/shaders/DotScreenShader.js';

export default class About extends Component {

    constructor(props){
        super(props)
    }

    loadModel(){
        let modelReady;
        let model;
        let composer;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
            antialias: true
        });
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        camera.position.z = 5;

        const loader = new GLTFLoader();

        const light = new THREE.AmbientLight(0xFF00FF); // soft white light
        scene.add(light);

        // postprocessing
        composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));

        const effect1 = new ShaderPass(DotScreenShader);
        effect1.uniforms['scale'].value = 5;
        composer.addPass(effect1);

        const effect2 = new ShaderPass(RGBShiftShader);
        effect2.uniforms['amount'].value = 0.0075;
        composer.addPass(effect2);

        //

        // Load a glTF resource
        loader.load(
            // resource URL
            './models/layne.glb',
            // called when the resource is loaded
            (gltf) => {

                gltf.scene.scale.set(0.07, 0.07, 0.07) // scale here
                model = gltf.scene;
                model.castShadow = true;
                model.receiveShadow = true;

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

        function onWindowResize() {

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize( window.innerWidth, window.innerHeight );
            composer.setSize( window.innerWidth, window.innerHeight );

        }

    const animate = function () {
        requestAnimationFrame(animate);

        if (modelReady) {
            //model.rotation.x += 0.01;
            model.rotation.y += 0.01;
        }

        composer.render();
       //renderer.render(scene, camera);
    };

    animate();
    
    window.addEventListener( 'resize', onWindowResize );
    }

    render() {
        this.loadModel();
        
        return (
            <section id="about">
            </section>
        )
    }
}