import React, { Component } from 'react'
import { render } from 'react-dom'
import { } from './styles/global.css'
import Logo from './components/Logo.jsx'
import Link from './components/Link.jsx';
import data from './assets/test.json';
import Container3d from 'react-container-3d';

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
                    <Container3d aspect={16 / 9} percentageWidth={"100%"} />
                </div>

            </div>
        )
    }
}
