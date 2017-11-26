import React, { Component } from 'react'
import { render } from 'react-dom'
import { } from './styles/global.css'
import Logo from './components/Logo.jsx'
import Link from './components/Link.jsx';
import data from './assets/test.json';
import Viewer3d from './components/Viewer3d.jsx';

const logos = [
    require('./assets/electron.png'),
    require('./assets/react.png'),
    require('./assets/webpack.png')
]

export default class App extends Component {
    constructor(props) {
        super(props);
        console.log("data", data);
        window.addEventListener('offline', function (e){
            alert("OFFLINE NOW");
        });
    }
    render() {
        const logosRender = logos.map((logo, index) => {
            return <Logo key={index} src={logo} />
        })

        return (
            <div>
                <div className="hello">
                    <h1>{data.name}</h1>
                </div>

                <div className="canvas-3d">
                    <Viewer3d data={data}/>
                </div>

            </div>
        )
    }
}
