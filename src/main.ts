import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '@/App.vue';
import store from '@/store';
import PersonalDetails from '@/components/single_instance/signup_form/PersonalDetails.vue';
import InsuranceDetails from '@/components/single_instance/signup_form/InsuranceDetails.vue';
import ControleSummary from '@/components/single_instance/signup_form/ControleSummary.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
    { path: '/', component: PersonalDetails },
    { path: '/verzekering', component: InsuranceDetails },
    { path: '/controle', component: ControleSummary }
];

const router = new VueRouter({
    routes
});

new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app');
