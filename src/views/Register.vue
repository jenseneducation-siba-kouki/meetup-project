<template>
  <div class="Register">
    <img src="../assets/Register.jpg" class="reg" alt="right">
    <form class="form">
      <label for="text">Usermname</label>
      <input type="text" v-model="user.name" />

      <label for="email">Email</label>
      <input type="email" v-model="user.email" />

      <label for="password">Password</label>
      <input type="password" v-model="user.password" />

      Repeat Password
      <input type="password" v-model="user.repeatPassword" />
     <router-link to="Page" class="btn" tag="button">Click Here to find more Events</router-link>

    </form>
  </div>
</template>

<script>
export default {
  name:"Register",
  data() {
    return {
      user: {
        email: "",
        password: "",
        repeatPassword: "",
        name: "",
      },
    };
  },
    methods: {
    },
}
</script>

<style lang="scss">
.reg{
margin-left:27rem;
margin-top:-2.5rem;
height: 10rem;
}

.form {
  width: 380px;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 2.5rem 2rem;
  background: rgb(82, 171, 206);
  border-radius: 8px;
}
input {
  width: 300px;
  border: 1px black;
  padding: 1rem;
  border-radius: 6px;
  margin: 1rem auto;
  background: #deeaf3;
}
.btn {
  width: 300px;
  padding: 1rem;
  margin: auto;
  text-align: center;
  font-size: 24px;
  border-radius: 5px;
  color: black;
  background: #deeaf3;
}
</style>
