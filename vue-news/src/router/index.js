import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
import CreateListView from "../views/CreateListView.js";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news',   
        },
        {
            path: '/news',
            name: 'news',
            //component: NewsView,   
            componenet: CreateListView('NewsView'),
        },
        {
            path: '/ask',
            name: 'ask',
            //component: AskView,
            componenet: CreateListView('AskView'),
        },
        {
            path: '/jobs',
            name: 'jobs',
            // component: JobsView,   
            componenet: CreateListView('JobsView'),
        },
        {
            path: '/item/:id',
            component: ItemView,   
        },
        {
            path: '/user/:id',
            component: UserView,   
        }
    ]
});