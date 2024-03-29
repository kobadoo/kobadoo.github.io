import React from 'react';

const images = require.context("../../images/shapes", true);
const SHAPE_MAP = [
    {shape: "Circle", colour: "White"},
    {shape: "Triangle", colour: "White"},
    {shape: "Square", colour: "White"},
    {shape: "Rectangle", colour: "White"},
    {shape: "Trapezium", colour: "White"},
    {shape: "Parallelogram", colour: "White"},
    {shape: "Diamond", colour: "White"},
    {shape: "Star", colour: "White"},
    {shape: "Pentagon", colour: "White"},
    {shape: "Hexagon", colour: "White"},
    {shape: "Circle", colour: "Yellow"},
    {shape: "Triangle", colour: "Yellow"},
    {shape: "Square", colour: "Yellow"},
    {shape: "Rectangle", colour: "Yellow"},
    {shape: "Trapezium", colour: "Yellow"},
    {shape: "Parallelogram", colour: "Yellow"},
    {shape: "Diamond", colour: "Yellow"},
    {shape: "Star", colour: "Yellow"},
    {shape: "Pentagon", colour: "Yellow"},
    {shape: "Hexagon", colour: "Yellow"},
    {shape: "Circle", colour: "Orange"},
    {shape: "Triangle", colour: "Orange"},
    {shape: "Square", colour: "Orange"},
    {shape: "Rectangle", colour: "Orange"},
    {shape: "Trapezium", colour: "Orange"},
    {shape: "Parallelogram", colour: "Orange"},
    {shape: "Diamond", colour: "Orange"},
    {shape: "Star", colour: "Orange"},
    {shape: "Pentagon", colour: "Orange"},
    {shape: "Hexagon", colour: "Orange"},
    {shape: "Circle", colour: "Red"},
    {shape: "Triangle", colour: "Red"},
    {shape: "Square", colour: "Red"},
    {shape: "Rectangle", colour: "Red"},
    {shape: "Trapezium", colour: "Red"},
    {shape: "Parallelogram", colour: "Red"},
    {shape: "Diamond", colour: "Red"},
    {shape: "Star", colour: "Red"},
    {shape: "Pentagon", colour: "Red"},
    {shape: "Hexagon", colour: "Red"},
    {shape: "Circle", colour: "Brown"},
    {shape: "Triangle", colour: "Brown"},
    {shape: "Square", colour: "Brown"},
    {shape: "Rectangle", colour: "Brown"},
    {shape: "Trapezium", colour: "Brown"},
    {shape: "Parallelogram", colour: "Brown"},
    {shape: "Diamond", colour: "Brown"},
    {shape: "Star", colour: "Brown"},
    {shape: "Pentagon", colour: "Brown"},
    {shape: "Hexagon", colour: "Brown"},
    {shape: "Circle", colour: "Purple"},
    {shape: "Triangle", colour: "Purple"},
    {shape: "Square", colour: "Purple"},
    {shape: "Rectangle", colour: "Purple"},
    {shape: "Trapezium", colour: "Purple"},
    {shape: "Parallelogram", colour: "Purple"},
    {shape: "Diamond", colour: "Purple"},
    {shape: "Star", colour: "Purple"},
    {shape: "Pentagon", colour: "Purple"},
    {shape: "Hexagon", colour: "Purple"},
    {shape: "Circle", colour: "Blue"},
    {shape: "Triangle", colour: "Blue"},
    {shape: "Square", colour: "Blue"},
    {shape: "Rectangle", colour: "Blue"},
    {shape: "Trapezium", colour: "Blue"},
    {shape: "Parallelogram", colour: "Blue"},
    {shape: "Diamond", colour: "Blue"},
    {shape: "Star", colour: "Blue"},
    {shape: "Pentagon", colour: "Blue"},
    {shape: "Hexagon", colour: "Blue"},
    {shape: "Circle", colour: "Green"},
    {shape: "Triangle", colour: "Green"},
    {shape: "Square", colour: "Green"},
    {shape: "Rectangle", colour: "Green"},
    {shape: "Trapezium", colour: "Green"},
    {shape: "Parallelogram", colour: "Green"},
    {shape: "Diamond", colour: "Green"},
    {shape: "Star", colour: "Green"},
    {shape: "Pentagon", colour: "Green"},
    {shape: "Hexagon", colour: "Green"},
    {shape: "Circle", colour: "Grey"},
    {shape: "Triangle", colour: "Grey"},
    {shape: "Square", colour: "Grey"},
    {shape: "Rectangle", colour: "Grey"},
    {shape: "Trapezium", colour: "Grey"},
    {shape: "Parallelogram", colour: "Grey"},
    {shape: "Diamond", colour: "Grey"},
    {shape: "Star", colour: "Grey"},
    {shape: "Pentagon", colour: "Grey"},
    {shape: "Hexagon", colour: "Grey"},
    {shape: "Circle", colour: "Black"},
    {shape: "Triangle", colour: "Black"},
    {shape: "Square", colour: "Black"},
    {shape: "Rectangle", colour: "Black"},
    {shape: "Trapezium", colour: "Black"},
    {shape: "Parallelogram", colour: "Black"},
    {shape: "Diamond", colour: "Black"},
    {shape: "Star", colour: "Black"},
    {shape: "Pentagon", colour: "Black"},
    {shape: "Hexagon", colour: "Black"}
];

export const Shape = (props) => (
    <span role="img" onClick={props.clickHandler}>
        <img className={props.className} alt={SHAPE_MAP[props.num].colour + ' ' + SHAPE_MAP[props.num].shape}
            src={images('./' + (SHAPE_MAP[props.num].shape + '-' + SHAPE_MAP[props.num].colour).toLowerCase() + '.png')} />
    </span>
);

export const ShapeName = (props) => (
    <span role="img" className={props.className} onClick={props.clickHandler}>
        {SHAPE_MAP[props.num].colour + ' ' + SHAPE_MAP[props.num].shape}
    </span>
);