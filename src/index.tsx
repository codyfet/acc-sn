import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';

import {App} from './Components/App';

import "./styles";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById("root")
);