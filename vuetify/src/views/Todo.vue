<template>
  <div class="todo">
    <InputTask @add="TaskAdd" />
    <TaskView :tasks="tasks" @state="TaskToggle" @delete="TaskDelete" />
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import TaskView from '@/components/TaskView.vue'
import InputTask from '@/components/InputTask.vue'

export interface task {
  id: number
  name: string
  state: boolean
}

@Component({
  components: {
    TaskView,
    InputTask,
  },
})
export default class Todo extends Vue {
  private key = 3

  public tasks: task[] = [
    {id: 1, name: '島村卯月', state: false},
    {id: 2, name: '渋谷凛', state: true},
    {id: 3, name: '本田未央', state: false},
  ]

  private A_I(): number {
    this.key++
    return this.key
  }

  public TaskToggle(t: task) {
    this.tasks.filter(v => v === t).forEach(v => (v.state = !v.state))
  }

  public TaskAdd(msg: string) {
    this.tasks.push({
      id: this.A_I(),
      name: msg,
      state: false,
    })
  }

  public TaskDelete(t: task) {
    this.tasks = this.tasks.filter(v => v !== t)
  }
}
</script>
