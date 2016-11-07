import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { IndexModule } from './index/indexModule';
platformBrowserDynamic().bootstrapModule(IndexModule);
document.addEventListener('DOMContentLoaded', function () {
        var html = document.documentElement;
        var windowWidth = html.clientWidth;
        html.style.fontSize = windowWidth / 3.75 + 'px';
}, false);