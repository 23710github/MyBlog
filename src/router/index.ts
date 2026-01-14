import { createRouter, createWebHistory } from "vue-router";
import IndexVue from "../pages/IndexVue.vue";
import BlogVue from "../pages/Blog/BlogVue.vue";
import HomeVue from "../pages/Home/HomeVue.vue";




const routes =[
    {
        path:"/",
        name:"index",
        component:IndexVue,
        redirect:"/home",
        children:[
            {
                path:"/home",
                name:"home",
                component:HomeVue

            },
            
            {
                path:"/blog",
                name:"blog",
                component:BlogVue

            }

        ]
    }
]



const router=createRouter(
    {
        history:createWebHistory(),
        routes
    }
)

export default router;