'use babel';

import React from 'react';
import THREE from 'three';
import CubeView from 'react-cubeview';
import Container3d from 'react-container-3d';

//optional css file
import 'react-cubeview/dist/react-cubeview.css';
import '../App.css';

//import 'https://raw.githubusercontent.com/lucascassiano/react-cubeview/master/react-cubeview/dist/react-cubeview.css';
//import model from './dragon.obj';

const DEBUG = false;

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <div className="cube-view">
          <CubeView aspect={1} hoverColor={0x0088FF} cubeSize={1} zoom={6} antialias={false} />
        </div>
        <div className="canvas-3d">
          <Container3d aspect={16 / 9} percentageWidth={"100%"} />
        </div>
      </div>
    );
  }

}
