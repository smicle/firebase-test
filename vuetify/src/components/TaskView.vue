<template>
  <div class="task">
    <table>
      <tr>
        <th>ID</th>
        <th>内容</th>
        <th>状態</th>
        <th></th>
      </tr>
      <tr v-for="(task, i) in tasks" :key="i">
        <td>{{ task.id }}</td>
        <td>{{ task.name }}</td>
        <td>
          <button @click="toggleState(task)">
            {{ task.state ? '完了' : '作業中' }}
          </button>
        </td>
        <td>
          <button @click="deleteTask(task)">削除</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator'
import {task} from '../views/Home.vue'

@Component
export default class TaskView extends Vue {
  @Prop({required: true})
  public tasks?: task[]

  @Emit()
  public state(t: task) {}

  public toggleState(t: task) {
    this.state(t)
  }

  @Emit()
  public delete(t: task) {}

  public deleteTask(t: task) {
    this.delete(t)
  }
}
</script>

<style scoped></style>
