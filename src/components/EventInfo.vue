<template>
  <div class="event-info" >
    <h3 class="event-title">{{event.name}}</h3> <br>
    <h2>Hosted By {{event.hosted}} </h2>
    <br>
    <div class="info-box">
        <p><strong>location:</strong> {{event.location}}</p>
        <p><strong>Duration:</strong> {{event.duration}}</p>
        <p><strong>Price:</strong> {{event.price}}</p>
        <p><strong>description:</strong> <br><br>{{event.description}}</p>

    </div>
        <router-link class="butt" to="/Register" tag="button">Register</router-link>

        <Review />

  </div>
</template>

<script>
import Review from '@/components/Review.vue'

export default {
    name:"EventInfo",
     components:{
    Review
  },
  props: {
      event: Object
  },

data: function () {
  return {
    data: this.event,
  }
},
methods: {

}
}
</script>

<style  lang="scss">
.content {
  min-height: 100%;
  width: 100vw;
  display: flex;
}

.event-info {
  height: 450px;
  width: 350px;
  margin: 20px;
  color: black;
  display:flex;
  flex-direction:column;

  button {
  width: 200px;
  height: 30px;
  border-radius: 5px ;
  }
  h3 {
  font-size: 1.7em;
  text-align: center;
  }

 h2 {
  font-size: 1em;
  margin-top:-10px;
  margin-bottom: 30px;
  font-weight: 600;
  }
  .info-event {
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: rgb(29, 27, 27);
    margin-top: 40px;

    p {
    font-size: .8em
    }
  }
}

.event-container {
  display: flex;
  margin: auto;
}

 .big-event {
  height: 450px;
  width: 350px;
  margin: 20px;
  border: 0 0 0 10px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
}

.big-event h3 {
  color: black;
  font-size: 1.2em;
  margin: 20px
}
</style>