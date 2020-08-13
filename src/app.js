import { defineComponent, h } from "@vue/runtime-core";
export default defineComponent({
  render() {   
    const vnode = h("line",{},[
      h('cube')
    ]);
    console.log(vnode);
    return vnode;
  },
});