// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SignUpView from '../views/SignUpView.vue';
import LoginView from '../views/LoginView.vue';
import { getAuth } from 'firebase/auth'; // Importar getAuth de firebase/auth

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true } // Restringir acceso a usuarios autenticados
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// Guardián para proteger rutas
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = getAuth().currentUser; // Usa getAuth() para obtener el usuario

  if (requiresAuth && !isAuthenticated) {
    next('/login'); // Redirigir a login si no está autenticado
  } else {
    next(); // Permitir acceso si está autenticado o la ruta no requiere autenticación
  }
});

export default router;

