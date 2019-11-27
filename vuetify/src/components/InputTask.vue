<template>
  <div class="InputTask">
    <form @submit.prevent="addTask(taskname)">
      <input type="text" v-model="taskname" placeholder="input the task" />
      <button @click.prevent="addTask(taskname)">追加</button>
    </form>
  </div>
</template>

<script lang="ts">
import {Component, Emit, Vue} from 'vue-property-decorator'

@Component
export default class InputTask extends Vue {
  private taskname = ''

  @Emit()
  public add(msg: string) {}

  public addTask(msg: string) {
    this.add(msg)
    this.taskname = ''
  }
}
</script>

<style scoped>
.input {
  width: 130pt;
  height: 30pt;
}
.button {
  display: block;
  position: relative;
  margin: 0 auto;
  width: 70pt;
  border: solid 1px silver;
  border-radius: 0.5rem 0.5rem;
  padding: 0.5rem 1.5rem;
  margin-top: 1rem;
  text-decoration: none;
}
</style>
