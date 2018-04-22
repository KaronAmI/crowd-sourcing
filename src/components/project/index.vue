<template>
  <div>
    <list></list>
    <add></add>
    <preview v-if="doneProject"></preview>
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
  },
  computed: {
    customerId () {
      return this.$store.getters.doneLogin.id
    },
    doneProject () {
      return this.$store.getters.doneProject
    }
  }
}
</script>
