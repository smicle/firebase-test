<template>
  <div class="about">
    <MyButton></MyButton>
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
export default class About extends Vue {}
</script>
