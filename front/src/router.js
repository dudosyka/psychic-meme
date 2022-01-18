import VueRouter from 'vue-router'
import Home from '@/components/Home';
import View from '@/components/View';

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/view',
            component: View
        },
    ],
});
