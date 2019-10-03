export default class Router {
    private root: any;
    private routes: Map<String, {root: any, view: any, data: Object}>;
    private currentRoute: String;

    constructor(root: Element) {
        this.root = root;
        this.routes = new Map();

        this.currentRoute = null;

        window.addEventListener('popstate', () => {
            const pathname = Router.normalizePath(location.pathname);
            this.change(pathname, false);
        });
    }

    toStartPage(delPrev: Boolean = false) {
        if (delPrev) {
            window.history.replaceState(null, null, '/');
        }

        this.change('/', !delPrev);
    }

    add(path: String, root = this.root, view: any, data?: Object) {
        this.routes.set(path, {
            root,
            view,
            data
        });
    }

    change(path: String, addToHistory: Boolean = true) {
        if (this.currentRoute === path) {
            return;
        }

        const currentData = this.routes.get(this.currentRoute);
        if (currentData) {
            currentData.view.close();
            currentData.view.hide(currentData.root);
        }

        if (addToHistory) {
            window.history.pushState(null, null, (path as string));
        }

        if (this.routes.has(path)) {
            let route = this.routes.get(path);
            route.view.render(route.data);
            this.currentRoute = path;
        }
    }

    static normalizePath(path: String): String {
        return path.charAt(path.length - 1) === '/' && path !== '/' ? path.slice(0, path.length - 1) : path;
    }

    start() {
        this.root.addEventListener('click', (event: any) => {
            if (event.target.tagName === 'A' && event.target.hostname === location.hostname) {
                event.preventDefault();
                this.change(Router.normalizePath(event.target.pathname));
            }
        });

        this.change(Router.normalizePath(window.location.pathname), false);
    }
}