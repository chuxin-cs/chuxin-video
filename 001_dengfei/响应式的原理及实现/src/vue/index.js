import { ref, createRef } from "./hooks";
import { render } from "./render";
import { bindEvent } from "./event";

export function createApp(el, { refs, methods }) {
  const $el = document.querySelector(el);
  const allNode = $el.querySelectorAll("*");
  const refMap = createRef(refs, allNode);

  render(refMap);
  //改变this指向
  bindEvent.apply(refMap, [methods, allNode]);
  //   bindEvent(refMap, methods, allNode);

  //   console.log(refMap);
}

export { ref };
