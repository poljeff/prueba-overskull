import { createRouter, createWebHistory } from "vue-router"
import ProyectosView from "../views/ProyectosView.vue"
import TareasView from "../views/TareasView.vue"
import TareasCrearView from "../views/TareasCrearView.vue"

const router =  createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Proyectos',
            component: ProyectosView
        },
        {
            path: '/tareas/:id',
            name: 'Tareas',
            component: TareasView
        },
        {
            path: '/tareas/crear',
            name: 'Crear',
            component: TareasCrearView
        },
    ]
})
export default router