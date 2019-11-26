<template>
  <div class="home">
    <p>{{ greetText }}</p>
    <p>
      <MyButton :greet="greetText" @click="onMyButtonClicked"></MyButton>
    </p>
    <p>
      <ResetButton v-model="greetText"></ResetButton>
    </p>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import MyButton from '@/components/MyButton.vue'
import ResetButton from '@/components/ResetButton.vue'

@Component({
  components: {
    MyButton,
    ResetButton,
  },
})

export default class Home extends Vue {
  private count = 0
  public greetText = 'Hello'

  public onMyButtonClicked(c: number) {
    this.count = c
    this.greetText = 'こんにちは'
  }
}
</script>
