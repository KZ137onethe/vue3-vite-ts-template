<script setup lang="ts">
import {httpRequest} from '@/axios'

enum Api {
  Sentence = 'https://v1.hitokoto.cn/'
}

const data = reactive({
  from_who: '',
  hitokoto: ''
})

const getSentence = ({c = undefined, encode = undefined}: { c?: 'b' | 'f', encode?: 'text' } = {}
) => {
  return httpRequest.get({
    url: Api.Sentence,
    params: {
      c,
      encode
    },
  })
}

onMounted(async () => {
  const { data: result } = await getSentence()
  data.from_who = result.from_who
  data.hitokoto = result.hitokoto
})
</script>

<template>
  <div class="son-children">
    <slot :render="data"></slot>
  </div>
</template>

<style scoped lang="scss">

</style>
