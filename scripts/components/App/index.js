import React, {PureComponent} from "react";
import configureStore from "../../utils/configureStore";
import {Provider} from "react-redux";
import reducers from "../../reducers";

import Home from "../Home";

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.store = configureStore(reducers);
    }

    render() {
        return (
            <Provider store={this.store}>
                <Home />
            </Provider>
        );
    }
};
