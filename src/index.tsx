import * as React from "react";
import * as ReactDOM from "react-dom";

import "./styles";

import { Hello } from "./Hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("root")
);
