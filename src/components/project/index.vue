<template>
  <div>
    <list></list>
    <add></add>
    <preview></preview>
  </div>
</template>

<script>
import list from '@/components/project/list'
import add from '@/components/project/add'
import preview from '@/components/project/preview'
export default {
  name: 'project',
  components: {
    list,
    add,
    preview
  }
}
</script>
