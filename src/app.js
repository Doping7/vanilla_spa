import {BASE_URL} from "./constants/routeInfo.js";
import {navigate} from "./util/navigate.js";
import {$} from "./util/querySelector.js";
import Router from "./router.js";


function App ($container) {
    this.$container = $container;

    const init = () => {
        $(".navbar").addEventListener('click', (e) => {
            const target = e.target.closest("a");
            if (!(target instanceof HTMLAnchorElement)) return;

            e.preventDefault();
            const targetURL = e.target.href.replace(BASE_URL, "");
            navigate(targetURL);
        });

        new Router($container);
    }

    init();
}
export default App;
