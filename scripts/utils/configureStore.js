import thunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";

export const configureStore = (reducers) => {
    let baseMiddleWare = [thunk];
    if (process.env.NODE_ENV !== "production") {
        baseMiddleWare = baseMiddleWare.concat([
            createLogger()
        ]);
    }

    const store = createStore(
      reducers,
      applyMiddleware(...baseMiddleWare)
    );
    return store;
};

export default configureStore;
