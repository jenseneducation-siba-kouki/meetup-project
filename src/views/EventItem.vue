<template>
  <div class="content">
    <router-view/>
  <div class="event-container">
    <EventTemplate class="big-event" v-bind:event="event"/>
    <EventInfo class="event-info" v-bind:event="event"/>
  </div>
  </div>  
</template>

<script>
// @ is an alias to /src
import EventTemplate from '@/components/EventTemplate.vue'
import EventInfo from '@/components/EventInfo.vue'

export default {
  name: 'EventItem',
  computed: {
    events(){
      return this.$root.$data.events
    },
    event() {
      return this.events[this.$route.params.id - 1]
    }
  },
  components: {
    EventTemplate,
    EventInfo,
    
  },
  }
</script>

<style lang="scss">

</style>