import React, {PureComponent} from "react";

import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "./mapProps";

import "./styles.scss";

export class Home extends PureComponent {
    componentDidMount = () => {
        this.props.initialise();
    }

    render() {
        return (
            <div className="container">
                <h1>Hello, World! I am here</h1>
            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
