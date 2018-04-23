<template>
  <div class="cs-project-index">
    <div class="index-addNew">
      <el-button type="success" @click="addNew">添加新项目</el-button>
    </div>
    <list></list>
    <add v-if="doneProject || doneIsNewProject"></add>
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
    },
    doneIsNewProject () {
      return this.$store.getters.doneIsNewProject
    }
  },
  methods: {
    async addNew () {
      await this.$store.dispatch('setState', {type: 'isNewProject', data: true})
      await this.$store.dispatch('setState', {type: 'project', data: ''})
      await this.$store.dispatch('setState', {type: 'getRewardsByProjectId', data: ''})
      await this.$store.dispatch('setState', {type: 'projectStep', data: 1})
    }
  }
}
</script>
