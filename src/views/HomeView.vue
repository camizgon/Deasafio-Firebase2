<template>
  <div>
    <h1>Home</h1>
    <p>Welcome to the Home page!</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { auth } from '../config/firebaseConfig'; 
export default {
  setup() {
    const router = useRouter();

    const logout = async () => {
      try {
        await signOut(auth);
        router.push('/login');
      } catch (error) {
        console.error(error);
      }
    };

    return { logout };
  },
};
</script>

