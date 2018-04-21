<template>
  <div>
    <list></list>
    <add></add>
  </div>
</template>

<script>
import add from '@/components/device/add.vue'
import list from '@/components/device/list.vue'
export default {
  name: 'deviceIndex',
  components: {
    list,
    add
  }
}
</script>
