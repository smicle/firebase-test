<template>
  <div class="task">
    <v-data-table :headers="headers" :items="tasks" class="elevation-1">
      <template v-slot:item.state="{item}">
        <v-btn @click="toggleState(item)" :color="item.state ? 'info' : 'warning'">
          {{ item.state ? '完了' : '作業中' }}
        </v-btn>
      </template>
      <template v-slot:item.del="{item}">
        <v-btn @click="deleteTask(item)" color="error">削除</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator'
import {task} from '../views/Todo.vue'

@Component
export default class TaskView extends Vue {
  private headers = [
    {
      text: 'ID',
      value: 'id',
      align: 'left',
      divider: true,
      width: 40,
    },
    {
      text: '内容',
      value: 'name',
      align: 'left',
      divider: true,
      sortable: false,
    },
    {
      text: '状態',
      value: 'state',
      align: 'center',
      sortable: false,
      divider: true,
      width: 120,
    },
    {
      text: '削除',
      value: 'del',
      align: 'center',
      sortable: false,
      width: 120,
    },
  ]

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

<style scoped>
.task {
  margin: 5px;
}
</style>
