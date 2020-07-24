import { init } from 'snabbdom/src/package/init'
import { classModule } from 'snabbdom/src/package/modules/class'
import { propsModule } from 'snabbdom/src/package/modules/props'
import { styleModule } from 'snabbdom/src/package/modules/style'
import { eventListenersModule } from 'snabbdom/src/package/modules/eventlisteners'
import { h } from 'snabbdom/src/package/h' 

var patch = init([ 
  classModule, 
  propsModule, 
  styleModule, 
  eventListenersModule,
])

var container = document.getElementById('container')
debugger
var vnode = h('div#container.two.classes', { on: { click: someFn } }, [
  h('span', { style: { fontWeight: 'bold' } }, 'This is bold'),
  ' and this is just normal text',
  h('a', { props: { href: '/foo' } }, 'I\'ll take you places!')
])
// var vnode = h("div#app.one", '我是一个字符串', {style : {fontWeight: 'bold'}})
console.log(patch(container, vnode));

var newVnode = h('div#container.two.classes', { on: { click: anotherEventHandler } }, [
  h('span', { style: { fontWeight: 'normal', fontStyle: 'italic' } }, 'This is now italic type'),
  ' and this is still just normal text',
  h('a', { props: { href: '/bar' } }, 'I\'ll take you places!')
])


function someFn() {
  console.log(this);
}
function anotherEventHandler(){
  console.log("other");
}
patch(vnode, newVnode)