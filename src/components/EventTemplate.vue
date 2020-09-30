<template>
  <div class="event-preview">
      <img :src="require('@/assets/image-' + event.image + '.jpg')">

    <h3>{{event.name}}</h3>

  </div>
</template>

<script>

export default {
  name:"EventTemplate",
props: ['event'],

data: function () {
  return {
    data: this.event
  }
}
}
</script>

<style>

.event-preview {
  height: 250px;
  width: 200px;
  margin: 0 0  0 10px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column
}

.event-preview h3 {
  font-size: 1.2em;
  margin: 3px;
  color: black;
}
img{
  height: 15rem;
}
</style>