import React from 'react';

const layout = (props) => (
    <React.Fragment>
        <main>{props.children}</main>
    </React.Fragment>
);

export default layout;