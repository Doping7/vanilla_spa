import App from "./src/app.js";
import "./style.css"
import {$} from "./src/util/querySelector.js";

window.addEventListener('DOMContentLoaded', (e) => {
    new App($('#app'))
})
