export function render(refMap) {
  for (let key in refMap) {
    _render(refMap[key]);
  }
}

export function updata(ref) {
  _render(ref);
}

function _render({ deps, value }) {
  deps.forEach((el) => {
    el.textContent = value;
  });
}
