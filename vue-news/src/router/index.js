import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
import createListView from "../views/CreateListView.js";
import bus from '../utils/bus.js';
import { store } from '../store/index.js';

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
            component: NewsView,   
            // component: createListView('NewsView'),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                setTimeout(() => {
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                    console.log('fetched');
                    bus.$emit('end:spinner');
                    next();
                    })
                    .catch((error) => {
                    console.log(error);
                    });
                }, 3000);
            }
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
            // component: createListView('AskView'),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                setTimeout(() => {
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                    console.log('fetched');
                    bus.$emit('end:spinner');
                    next();
                    })
                    .catch((error) => {
                    console.log(error);
                    });
                }, 3000);
            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,   
            // component: createListView('JobsView'),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                setTimeout(() => {
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                    console.log('fetched');
                    bus.$emit('end:spinner');
                    next();
                    })
                    .catch((error) => {
                    console.log(error);
                    });
                }, 3000);
            }
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