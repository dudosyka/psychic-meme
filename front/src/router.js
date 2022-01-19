import VueRouter from 'vue-router'
import Home from '@/components/Home';
import View from '@/components/CollectionView';

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
