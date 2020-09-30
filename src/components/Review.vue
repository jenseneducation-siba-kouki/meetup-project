<template>
  <div class="Review">
     <h5>Comment</h5>
      <form @submit="add">
          <textarea
            id="add"
            type="text"
            v-model="comment"
            :Review="validity"
          ></textarea>
         <br>
        <button  type="submit" :disabled="validity">Add your Comment</button>       
      </form>
      <ul>
        <li v-for="review in reviews" :key="review">
          <label :v-for="'review-${index}'">
            <span class="text">{{ review.name }}</span>
          </label>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      comment: "",
      reviews: [],
    };
  },
  methods: {
    add(e) {
      e.preventDefault();
      this.reviews.push({
        name: this.comment,
      });
         },
  },
  computed: {
    validity() {
      return this.comment.trim() === "";
    },
  },
}
</script>

<style >
h5{
    font-size: 1.5rem;
    margin-top:1.5rem;

}
input,
textarea{
    margin-top:1rem;
    width: 100%;
    padding: 10px 5px;
}
</style>