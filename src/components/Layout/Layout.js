import React from 'react';
import classes from './Layout.module.css';

const layout = (props) => (
    <React.Fragment>
        <main>{props.children}</main>
    </React.Fragment>
);

export default layout;