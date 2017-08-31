const getters = {
  doneTasks: state => {
    return state.taskList.filter(task => task.done)
  },
  tasks: state => {
    return state.taskList.filter(task => !task.done)
  }
}

export default getters
