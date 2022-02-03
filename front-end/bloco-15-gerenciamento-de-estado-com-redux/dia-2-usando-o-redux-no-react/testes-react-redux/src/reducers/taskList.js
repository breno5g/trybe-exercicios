const INITIAL_STATE = {
  tasks: [],
};

const taskList = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD':
      console.log(action.task);
      return {
        ...state,
        tasks: [...state.tasks, action.task],
      };
    case 'DEL':
      const newTasksArray = state.tasks.filter((task) => task.id !== action.id);
      return {
        ...state,
        tasks: [...newTasksArray],
      };
    default:
      return state;
  }
};

export default taskList;
