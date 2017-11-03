'use babel';

import React from 'react';
import THREE from 'three';
import CubeView from 'react-cubeview';


const DEBUG = false;


export default class Main extends React.Component {

  render() {
    return (
      <div>Hello from -> React with ES6
      <div className="cube-view">
          <CubeView aspect={1} hoverColor={0x0088FF} cubeSize={2} zoom={6} antialias={false} />
        </div>
      </div>
    );
  }

}
