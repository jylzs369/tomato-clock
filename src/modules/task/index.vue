<template>
  <div class="task">
    <button class="btn gray tl new border-vertical" @click="location.reload()">添加新任务</button>
    <ul class="list scroll color-lighter">
      <router-link tag="li" class="flex" :to="{name: 'TaskDetail'}" v-for="(task, index) in tasks" :key="index">
        <span>
          <input :id="`task${task.id}`" type="checkbox" value="task.id" v-model="done" @click="console.log(done)" />
          <label :for="`task${task.id}`" class="tomato-icon icon-unselected font-large"></label>
        </span>
        <span class="title tl color-dark"><em class="tag" v-for="(tag, index) in task.tags" :key="index">{{ `#${tag} ` }}</em>{{ task.title }}</span>
        <span class="tr">
          <input :id="`todo${task.id}`" type="checkbox" value="task.id" v-model="todo" @click="console.log(todo)" />
          <label :for="`todo${task.id}`" class="tomato-icon font-large" :class="task.todo ? 'icon-pin-fill color-primary' : 'icon-pin'"></label >
        </span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      done: [],
      todo: [],
      tasks: [
        {
          id: 1,
          tags: [
            '标签1',
            '标签2'
          ],
          title: '任务1',
          todo: true
        },
        {
          id: 1,
          tags: [
            '标签1',
            '标签2'
          ],
          title: '任务2',
          todo: false
        },
        {
          id: 1,
          tags: [
            '标签1',
            '标签2'
          ],
          title: '任务3',
          todo: false
        },
        {
          id: 1,
          tags: [
            '标签1',
            '标签2'
          ],
          title: '任务3',
          todo: false
        },
        {
          id: 1,
          tags: [
            '标签1',
            '标签2'
          ],
          title: '任务3',
          todo: false
        },
        {
          id: 1,
          tags: [
            '标签1',
            '标签2'
          ],
          title: '任务3',
          todo: false
        },
        {
          id: 1,
          tags: [
            '标签1',
            '标签2'
          ],
          title: '任务3',
          todo: false
        },
        {
          id: 1,
          tags: [
            '标签1',
            '标签2'
          ],
          title: '任务3',
          todo: false
        },
        {
          id: 1,
          tags: [
            '标签1',
            '标签2'
          ],
          title: '任务3',
          todo: false
        },
        {
          id: 1,
          tags: [
            '标签1',
            '标签2'
          ],
          title: '任务3',
          todo: false
        },
        {
          id: 1,
          tags: [
            '标签1',
            '标签2'
          ],
          title: '任务3',
          todo: false
        }
      ]
    }
  },
  created () {
  }
}
</script>
