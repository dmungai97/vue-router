import { createRouter,createWebHistory } from "vue-router";
import HomePage from './views/HomePage.vue'
import AboutPage from "./views/AboutPage.vue"
import CarPage from "./views/CarPage.vue"
import NotFound from "./views/NotFound.vue"
import DealerPage from "./views/DealerPage.vue"
import ManufacturerPage from "./views/ManufacturerPage.vue"

const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL), 
    routes:[
        {
            path:"/",
            name:'home',
            component:HomePage
        },
        {
            path:'/about',
            name:'about',
            component:AboutPage
        },
        {
            path:'/car/:id',
            name:'car',
            component:CarPage,
            children:[
                {
                    path:'dealer',
                    name:'dealer',
                    component:DealerPage
                },
                {
                    path:'manufacturer',
                    name:'manufacturer',
                    component:ManufacturerPage
                }
            ]
        },
        {
            path:'/:pathMatch(.*)*',
            name:'notfound',
            component:NotFound
        }
    ]
})

export default router