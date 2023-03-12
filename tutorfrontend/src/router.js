import { createRouter, createWebHistory } from 'vue-router'

import CreatePost from './components/CreatePost.vue'
// import EditForm from './components/EditForm.vue'
import HomePage from './components/HomePage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {name: 'Home', path: '/', redirect: '/tutorials/'},
        {
            name: 'questions', 
            path: '/tutorials/', 
            component: HomePage, 
            children: [
                {name: 'create', path: 'create', component: CreatePost},
                // {name: 'edit', path: 'edit', component: EditForm},
            ]},
    ],
    linkActiveClass: ''
});


export default router;