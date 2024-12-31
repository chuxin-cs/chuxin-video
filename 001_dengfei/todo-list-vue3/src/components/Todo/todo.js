import { addTodoService, toggleTodoService, removeTodoService,getTodoService,} from "../../service/todo.js";
import { computed, ref, watch, watchEffect } from "vue";
export function useTodoList() {
  const todoData = ref([]);
  const type = ref("");
  const todoCount = computed(() => todoData.value.length);
  const addTodo = async (todoText) => {
    type.value = "addTodo";
    const todo = {
      id: new Date().getTime(),
      content: todoText,
      completed: false,
    };
    try {
      await addTodoService(todo);
      todoData.value.push(todo);
    } catch (err) {}
  };
  const getTodo = () => {
    getTodoService().then((todos) => (todoData.value = todos));
  };
  const removeTodo = async (id) => {
    type.value = "removeTodo";
    try {
      await removeTodoService(id);
      todoData.value = todoData.value.filter((item) => item.id !== id);
    } catch (err) {}
  };
  const toggleTodo = async (id) => {
    type.value = "toggleTodo";
    try {
      await toggleTodoService(id);
      todoData.value = todoData.value.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      });
    } catch (e) {}
  };
  watchEffect(getTodo);
  watch(type, (newValue) => {
    switch (type.value) {
      case "addTodo":
        console.log("增加");
        break;
      case "toggleTodo":
        console.log("修改");
        break;
      case "removeTodo":
        console.log("删除");
        break;

      default:
        break;
    }
  });

  return {
    todoData,
    addTodo,
    removeTodo,
    toggleTodo,
    todoCount,
  };
}
