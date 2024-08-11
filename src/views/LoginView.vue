<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { auth } from '../config/firebaseConfig'; 

export default {
  setup() {
    const router = useRouter();
    const email = ref('');
    const password = ref('');

    const login = async () => {
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        router.push('/home');
      } catch (error) {
        console.error(error);
      }
    };

    return { email, password, login };
  },
};
</script>

<style>
body{
  background-color: #515151;
}

h1{
 text-align: center;
}
form{
  width: 250px;
  height: 200px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #000;
  border-radius: 5px;
}

input{
width: 180px;
 margin-left: auto;
 margin-right: auto;
 margin-top: 40px;
 border: 1px solid #212121;
border-radius: 3px;  
}

button{
  width: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
}
</style>
