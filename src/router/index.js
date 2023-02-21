import Home from '../components/Home.vue';
import AddPost from '../components/AddPost.vue';
import Login from '../components/Login.vue';

import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    { 
        path: '/', 
        name: 'Home', 
        component: Home,
    },
    { 
        path: '/addpost', 
        name: 'AddPost', 
        component: AddPost, 
        beforeEnter: (to, from, next) => {
            const isAuthenticated = JSON.parse(localStorage.getItem('authenticated'));
            if(isAuthenticated) {
            next(); // allow to enter route
            } else{
            next('/login'); // go to '/login';
            }
        }
    },
    { 
        path: '/login', 
        name: 'Login', 
        component: Login,
        beforeEnter: (to, from, next) => {
            const isAuthenticated = JSON.parse(localStorage.getItem('authenticated'));
            if(!isAuthenticated) {
            next(); // allow to enter route
            } else{
            next('/'); // go to '/login';
            }
        }
    },
    // { path: '/profile/:name', component: Profile, props: true}
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;