/**
 * localStorage存储属性：
 * idCounter: 任务ID计数器
 * taskList: 任务列表
 * clockList: 番茄钟列表
 * timer: 番茄钟定时器时间（分钟）
 */
const state = {
  // 任务ID计数器
  idCounter: localStorage.icCounter || 0,
  // 任务列表
  taskList: localStorage.taskList || [],
  // 番茄钟列表
  clockList: localStorage.clockList || [],
  tag: {
    // 过滤标签
    value: '',
    // 标签显示状态
    show: false
  },
  // 番茄钟状态
  status: 0,
  // 倒计时
  countdown: (localStorage.timer || 25) * 60 * 1000
}

export default state
