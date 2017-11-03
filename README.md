# electron_AMG8833_Viewer
Simple GUI for AMG8833 Thermal Camera

## AMG8833 - thermal camera viewer
* this project was bootstraped by [electron-es6-react](https://github.com/b52/electron-es6-react) using [serialport](https://www.npmjs.com/package/serialport#electron) package.

## Communication
Using the SerialPort node.js package on 'flowing mode', the app reads all received lines on the serialport.

## Data Structure
the data structure is based on a JSON object that is sent over SerialPort (**115200** bauds), this JSON has the following structure:
```
{
    "data": [/*64 float numbers*/],
    "temp": /*float number*/
}
```
**data** represents the pixels from the AMG8833 thermal camera and **temp** is the internal thermostat's value

Example:
```
{
	"data": [23.00, 23.50, 23.50, 23.25, 23.50, 23.00, 24.00, 23.75, 23.50, 23.50, 23.25, 23.25, 22.75, 23.00, 23.00, 24.00, 23.00, 23.25, 23.25, 23.00, 23.25, 23.25, 23.50, 23.75, 23.00, 24.50, 23.75, 22.75, 23.25, 23.25, 23.50, 23.25, 23.25, 24.75, 24.75, 23.50, 22.75, 23.25, 23.25, 23.50, 23.25, 23.75, 23.75, 23.25, 22.75, 22.75, 22.75, 23.75, 23.75, 22.75, 23.50, 23.25, 23.50, 23.25, 23.25, 24.25, 23.75, 23.00, 23.25, 23.00, 23.00, 23.00, 24.50, 24.00],
	"temp": 25.69
}
```






