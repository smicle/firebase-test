<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>{{ greetText }}</p>
    <p>挨拶した回数：{{ count }}回</p>
    <p v-if="isRegulars">いつもありがとうございます</p>
    <p>
      <MyButton :greet="greetText" @click="onMyButtonClicked">挨拶する</MyButton>
    </p>
    <p>
      <ResetButton v-model="greetText"></ResetButton>
    </p>
  </div>
</template>

<script lang="ts">
import {Component, Watch, Vue} from 'vue-property-decorator'
import MyButton from '@/components/MyButton.vue'
import ResetButton from '@/components/ResetButton.vue'

@Component({
  components: {
    MyButton,
    ResetButton,
  },
})
export default class Hello extends Vue {
  private count = 0
  public greetText = 'Hello'

  public get isRegulars(): boolean {
    return this.count >= 5
  }

  @Watch('count')
  public countChanged() {
    if (this.count === 5) console.log('常連になりました')
  }

  public onMyButtonClicked(c: number) {
    this.count = c
    this.greetText = 'こんにちは'
  }
}
</script>
