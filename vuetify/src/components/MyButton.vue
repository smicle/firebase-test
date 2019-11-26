<template>
  <button @click="onClick"><slot></slot></button>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator'

@Component
export default class MyButton extends Vue {
  private count = 0

  @Prop()
  public greet?: string

  @Emit()
  public click(c: number) {}

  public onClick() {
    alert(this.greet)
    this.click(++this.count)
  }

  public countReset() {
    this.count = 0
  }
}
</script>
