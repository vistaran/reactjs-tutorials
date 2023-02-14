import { Fragment } from 'react';
import logo from './logo.svg';

function CompWithProps(props) {

    return (
        <Fragment>
            <h1>{props.user.name}:{props.user.age}</h1>
            {props.children}
            <img src={logo} className="App-logo" alt="logo" />
        </Fragment>
    )
}

export default CompWithProps;