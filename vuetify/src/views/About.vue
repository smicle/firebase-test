<template>
  <div class="about">
    <MyButton :greet="greetText" @click="onMyButtonClicked"></MyButton>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import MyButton from '@/components/MyButton.vue'

@Component({
  components: {
    MyButton,
  },
})
export default class About extends Vue {
  public greetText: string = 'Hello'

  public onMyButtonClicked() {
    this.greetText = this.greetText === 'こんにちは' ? 'Hello' : 'こんにちは'
  }
}
</script>
