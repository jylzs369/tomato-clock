import Vue from 'vue'
import Router from 'vue-router'
// module task
import Task from '@/modules/task/index'
import TaskDetail from '@/modules/task/detail'
import TaskHistory from '@/modules/task/history'
// module done
import Clock from '@/modules/done/index'
import ClockSupplement from '@/modules/done/supplement'
import ClockInterruption from '@/modules/done/interruption'
// module statistics
import Statistics from '@/modules/statistics/index'
import StatisticsClock from '@/modules/statistics/clock'
import StatisticsTask from '@/modules/statistics/task'
// module goal
import Goal from '@/modules/goal/index'
import GoalSetup from '@/modules/goal/setup'
// module progress
import Progress from '@/modules/progress/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/progress',
      name: 'Progress',
      component: Progress
    },
    {
      path: '/',
      name: 'Task',
      component: Task,
      children: [
        {
          path: '/detail',
          name: 'TaskDetail',
          component: TaskDetail
        },
        {
          path: '/history',
          name: 'TaskHistory',
          component: TaskHistory
        }
      ]
    },
    {
      path: '/done',
      name: 'Clock',
      component: Clock,
      children: [
        {
          path: '/supplement',
          name: 'ClockSupplement',
          component: ClockSupplement
        },
        {
          path: '/interruption',
          name: 'ClockInterruption',
          component: ClockInterruption
        }
      ]
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: Statistics,
      children: [
        {
          path: '/clock',
          name: 'StatisticsClock',
          component: StatisticsClock
        },
        {
          path: '/task',
          name: 'StatisticsTask',
          component: StatisticsTask
        }
      ]
    },
    {
      path: '/goal',
      name: 'Goal',
      component: Goal,
      children: [
        {
          path: '/setup',
          name: 'GoalSetup',
          component: GoalSetup
        }
      ]
    }
  ]
})
