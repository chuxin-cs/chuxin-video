import Ref from "./Ref";

const reg_var = /\{\{(.+?)\}\}/;

export function ref(initialValue) {
  return new Ref(initialValue);
}

export function createRef(refs, nodes) {
  nodes.forEach((el) => {
    if (reg_var.test(el.textContent)) {
      const refKey = el.textContent.match(reg_var)[1].trim();

      if (refs[refKey]) {
        refs[refKey].deps.add(el);
      }
    }
  });

  return refs;
}
