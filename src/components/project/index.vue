<template>
  <div class="cs-project-index">
    <div class="index-addNew">
      <el-button type="success" @click="addNew">添加新项目</el-button>
    </div>
    <list></list>
    <add v-if="doneProject || isNew"></add>
    <preview v-if="doneProject"></preview>
  </div>
</template>

<script>
import list from '@/components/project/list'
import add from '@/components/project/add'
import preview from '@/components/project/preview'
export default {
  name: 'project',
  data () {
    return {
      isNew: false
    }
  },
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
  },
  methods: {
    async addNew () {
      this.isNew = true
      await this.$store.dispatch('setState', {type: 'project', data: ''})
      await this.$store.dispatch('setState', {type: 'getRewardsByProjectId', data: ''})
    }
  }
}
</script>
