import HelloWorld from '../components/HelloWorld.vue';
import InputName from '../components/InputName.vue';
import Exercise from '../components/Exercise.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: InputName},
    { path: '/hello', component: HelloWorld},
    { path: '/exercise', component: Exercise}
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;