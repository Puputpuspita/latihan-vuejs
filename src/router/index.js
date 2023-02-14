import Home from '../components/Home.vue';
import About from '../components/About.vue';
import ContactUs from '../components/ContactUs.vue';
import Profile from '../components/Profile.vue'
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: Home},
    { path: '/about', component: About},
    { path: '/contactus', component: ContactUs},
    { path: '/profile/:name', component: Profile, props: true}
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;