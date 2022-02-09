const addTask = (value) => {
  return {
    type: 'ADD',
    task: {
      text: value,
      id: Math.random(),
    },
  };
};

export default addTask;
