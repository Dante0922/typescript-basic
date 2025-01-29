import {RouteInfo} from '../types';
import View from './view';

export default class Router {
    routeTable: RouteInfo[];
    defaultRoute: RouteInfo | null;

    constructor() {
        window.addEventListener('hashchange', this.route.bind(this));
        this.routeTable = [];
        this.defaultRoute = null;
    }

    setDefaultPage(page: View): void {
        this.defaultRoute = {path: '', page};
    }

    addRoutePath(path: string, page: View): void {
        this.routeTable.push({path, page});
    }

    route() {
        const routePath = location.hash;
        const id = location.hash.substring(7);

        if (routePath === '' && this.defaultRoute) {
            this.defaultRoute.page.render(id);
        }

        for (const routeInfo of this.routeTable) {
            if (routePath.indexOf(routeInfo.path) >= 0) {
                routeInfo.page.render(id);
                break;
            }
        }
    }
}
