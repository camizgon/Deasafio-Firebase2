<template>
    <div>
      <h1>Sign Up</h1>
      <form @submit.prevent="signUp">
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { createUserWithEmailAndPassword } from 'firebase/auth';
  import { useRouter } from 'vue-router';
  import { auth } from '../config/firebaseConfig'; 
  
  export default {
    setup() {
      const router = useRouter();
      const email = ref('');
      const password = ref('');
  
      const signUp = async () => {
        try {
          await createUserWithEmailAndPassword(auth, email.value, password.value);
          router.push('/home');
        } catch (error) {
          console.error(error);
        }
      };
  
      return { email, password, signUp };
    },
  };
  </script>
  
  
  