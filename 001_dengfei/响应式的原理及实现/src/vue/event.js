export function bindEvent(methods, nodes) {
  nodes.forEach((el) => {
    const handlerName = el.getAttribute("@click");

    if (handlerName) {
      el.addEventListener("click", methods[handlerName].bind(this), false);
    }
  });
}
