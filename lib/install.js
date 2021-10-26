import {VueAtPersonEditor} from './index';

const install = function (Vue) {
    if (install.installed) return;
    Vue.component(VueAtPersonEditor.name, VueAtPersonEditor);
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    VueAtPersonEditor,
};
