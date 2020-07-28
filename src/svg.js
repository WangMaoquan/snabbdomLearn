import { h } from '../node_modules/snabbdom/src/package/h';
import { init } from '../node_modules/snabbdom/src/package/init';
import { attributesModule }  from '../node_modules/snabbdom/src/package/modules/attributes';
import { styleModule }  from '../node_modules/snabbdom/src/package/modules/style';

debugger
let patch = init([attributesModule, styleModule]);
// console.log(attributesModule);

let vnode = h('div', [
  h('svg', { attrs: { width: 140, height: 170, xmlns: "http://www.w3.org/2000/svg", xlink: "http://www.w3.org/1999/xlink"}}, [
    h('title', 'cat'),
    h('desc', 'Stick Figure of a Cat'),
    h('circle', {attrs: {cx: 70, cy: 90, r: 50, stroke: 'black', fill: 'none'}}),
    h('circle', {attrs: {cx: 55, cy: 80, r: 5, stroke: 'black', fill: '#339933'}}),
    h('circle', {attrs: {cx: 85, cy: 80, r: 5, stroke: 'black', fill: '#339933'}}),
    h('polyline', {attrs: {points: "108 62, 90 10,70 45, 50 10, 32 62", stroke: 'black', fill: 'none'}}),
    h('polyline', {attrs: {points: "35 110, 45 120, 95 120, 105 110", stroke: 'black', fill: 'none'}}),
    h('path', {attrs: {d: "M 75 90 L 65 90 A 5 10 0 0 0 75 90", stroke: 'black', fill: '#ffcccc'}}),
    h('text', {attrs: {x: 60, y: 165, fontFamily: 'sans-serif', fontSize: '14pt'}}, 'Cat')
  ])
])

let app = document.querySelector('#app');

let oldVnode = patch(app, vnode);
