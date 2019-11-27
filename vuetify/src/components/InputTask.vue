<template>
  <div class="InputTask">
    <v-form ref="form" @submit.prevent="addTask(taskname)">
      <v-layout class="add-area" row wrap align-center>
        <v-flex md4>
          <v-text-field v-model="taskname" placeholder="input the task"></v-text-field>
        </v-flex>
        <v-flex md1>
          <v-btn @click.prevent="addTask(taskname)" color="success" dark>追加</v-btn>
        </v-flex>
      </v-layout>
    </v-form>
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
.add-area {
  margin-left: 20px;
}
</style>
