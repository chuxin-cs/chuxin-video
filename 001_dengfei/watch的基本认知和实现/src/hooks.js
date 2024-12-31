import { ref, reactive, toRefs } from "vue";

//自定义hooks
export function useState(initialState) {
  const state = ref(initialState);

  const setState = (newState) => {
    state.value = typeof newState === "function" ? newState(state) : newState;
  };
  return [state, setState];
}

export function useStateReactive(data) {
  const state = reactive(data);

  for (let key in state) {
    state[`set${key.slice(0, 1).toUpperCase()}${key.slice(1)}`] = function (
      newState
    ) {
      state[key] = typeof newState === "function" ? newState(state) : newState;
    };
  }

  return [state, toRefs(state)];
}
