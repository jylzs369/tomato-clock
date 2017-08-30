<template>
  <div class="task">
    <div class="mask" v-show="createTaskFocus" @click="createTask"></div>
    <input type="text" class="btn gray tl new border-vertical" @click="openTaskCreater" v-model="newTaskName" placeholder="添加新任务" />
    <ul class="list scroll color-lighter">
      <router-link tag="li" class="flex" :to="{name: 'TaskDetail'}" v-for="(task, index) in tasks" :key="index">
        <span>
          <i class="tomato-icon font-large" :class="task.done ? 'icon-selected' : 'icon-unselected'" @click="completeTask(task)"></i>
        </span>
        <span class="title tl color-dark"><em class="tag" v-for="(tag, index) in task.tags" :key="index" @click="filterTags(tag)">{{ `#${tag} ` }}</em>{{ task.title }}</span>
        <span class="tr">
          <i class="tomato-icon font-large" :class="task.todo ? 'icon-pin-fill color-primary' : 'icon-pin'" @click="stickTop(task)"></i >
        </span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      done: new Set(),
      todo: new Set(),
      task: [],
      newTaskName: '',
      filterTagsBtnShow: false,
      createTaskFocus: false
    }
  },
  created () {
    this.$mock.mock('/tasks', {
      'tasks|12': [{
        'id|+1': 1,
        'tags|0-1': ['标签1', '@cword(2)'],
        'title': '@ctitle',
        'done': false,
        'todo': false
      }]
    })
    this.$axios.get('/tasks').then((res) => {
      this.taskData = res.data.tasks
      this.tasks = [...this.taskData]
    })
  },
  methods: {
    createTask () {
      let newTask = {
        id: 13,
        tags: [],
        title: this.newTaskName,
        done: false,
        todo: false
      }
      console.log(newTask)
    },
    openTaskCreater () {
      this.createTaskFocus = true
    },
    switchProperty (obj, property) {
      obj[property] = !obj[property]
      obj[property] ? this[property].add(obj.id) : this[property].delete(obj.id)
    },
    completeTask (task) {
      this.switchProperty(task, 'done')
    },
    stickTop (task) {
      this.switchProperty(task, 'todo')
    },
    filterTags (tag) {
      this.tasks = this.taskData.filter((item) => {
        if (item.tags.includes(tag)) {
          return item
        }
      })
      this.filterTagsBtnShow = true
    },
    cancelTagFilter () {
      this.tasks = [...this.taskTask]
      this.filterTagsBtnShow = false
    }
  }
}
</script>
