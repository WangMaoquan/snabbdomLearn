import { h } from '../node_modules/snabbdom/src/package/h';
import { init } from '../node_modules/snabbdom/src/package/init';
import { datasetModule }  from '../node_modules/snabbdom/src/package/modules/dataset';
import { eventListenersModule }  from '../node_modules/snabbdom/src/package/modules/eventlisteners';

let patch = init([datasetModule, eventListenersModule]);

let vnode = h('div', [
  h('button', { dataset: { action: 'reset' }, on: { click: handlClick} }, 'Reset')
])

let app = document.querySelector("#app");

patch(app, vnode)

function handlClick() {
  // this.elm 拿到真实DOM
  // .dataset.action 拿到dataset
  console.log(this.elm.dataset.action);
}
