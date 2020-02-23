import React from "react";
import {Provider} from "react-redux";
import ReduxToastr from "react-redux-toastr";

import store from "./redux/store/index";
import Routes from "./routes/Routes";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(faEnvelope, faKey, fab, faCheckSquare, faCoffee);
function App() {
    return (
        <Provider store={store}>
            <Routes />
            <ReduxToastr
                timeOut={5000}
                newestOnTop={true}
                position="top-right"
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                progressBar
                closeOnToastrClick
            />
        </Provider>
    );
}

export default App;
