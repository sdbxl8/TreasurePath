import { createRouter, createWebHistory } from "vue-router";

import logging from '../components/logging.vue';
import register from '../components/register.vue';
import homePage from "../components/homePage.vue";
import historial from '../components/landingPageComponents/historial.vue';
import metas from '../components/landingPageComponents/metas.vue';
import card from '../components/landingPageComponents/card.vue'
import mainPage from '../components/landingPageComponents/mainPage.vue';
import graphics from '../components/landingPageComponents/graphics.vue';


const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
    {
        path:'/',
        redirect:'logging',
    },
    {
        path:'/logging',
        name:'logging',
        component:logging,
    },
    {
        path:'/register',
        name:'register',
        component:register,
    },
    {
        path:'/homePage',
        component:homePage,
        children:[
            {path:"",component:card},
            {path:"inicio",component:mainPage},
            {path:"historial", component:historial},
            {path:"metas", component:metas},
            {path:"graphics", component:graphics},
            
        ],
    },
]
});
export default router