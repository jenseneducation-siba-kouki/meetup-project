<template>
  <div class="home">
    <h1>Meetup</h1>
    <h4> DISCOVIR EVENTS <br> FOR ALL THE THINGS <br> YOU LOVE</h4>
    <h2>Events in Stockholm</h2>
    <div class="nav event-list">
            <router-link v-for="event in events" 
            :key="event.id" 
            :to="'/eventitem/' + event.id">
              <EventTemplate v-bind:event="event"/>
            </router-link>
            
          </div>
        <!-- <router-view/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import EventTemplate from '@/components/EventTemplate.vue'


export default {
  name: 'Home',
  components: {
    EventTemplate,
  },
  computed: {
        events(){
        return this.$root.$data.events
    },
}
}
</script>

<style lang="scss">
.home{
  background-image: url("../assets/meet.png");
  background-repeat: no-repeat;
  background-size:cover;
  height: 610px;
}
h1{
  margin:0px;
  text-align: left;
  padding-left:13rem;
  padding-top:32px;
  color:white;
}
h4{
  margin:0px;
  text-align: left;
  padding-left:11.5rem;
  padding-top:8.3rem;
  line-height: 35px;
  letter-spacing: 3px;
  font-size: 28px;
  color: white;
}
h2{
  margin-top:11.5em;
  text-align: center;
  font-size: 2em;
}
.event-list {
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   grid-template-rows: auto;
   width: 800px;
   margin: auto;
   justify-content: space-around;
   grid-gap: 90px;
   padding-top:8rem;
   text-align: center;
 }

</style>