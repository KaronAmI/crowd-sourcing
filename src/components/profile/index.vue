<template>
  <div>
    <profile></profile>
    <news></news>
  </div>
</template>

<script>
import profile from '@/components/profile/profile'
import news from '@/components/profile/news'
export default {
  name: 'indexProfile',
  components: {
    profile,
    news
  }
}
</script>
