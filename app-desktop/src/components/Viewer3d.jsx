import React, { Component } from 'react'
import { render } from 'react-dom'
import Container3d from 'react-container-3d';
import * as THREE from 'three';
let cube;

export default class Viewer3d extends Component {
    constructor(props) {
        super(props);
        console.log("Viewer3d, received data", props.data);
    }

    //called at when renderer is defined
    Setup(scene, camera, renderer) {
        console.log("starting 3d scene");
        var geometry = new THREE.BoxGeometry(2, 2, 2);
        var material = new THREE.MeshBasicMaterial({ color:0x0055ff});
        cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
    }

    //called every frame
    Update(scene, camera, renderer) {
        //console.log("scene", scene);
        cube.position.y += 0.001;
    }

    render() {
        return (
            <Container3d percentageWidth={"100%"} fitScreen={true} setup={this.Setup} update={this.Update} marginTop={30} />
        )
    }
}
