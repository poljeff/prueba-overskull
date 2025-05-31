import { createRouter, createWebHistory } from "vue-router"

const ProyectosView= () => import('../views/ProyectosView.vue')
const TareasView= () => import('../views/TareasView.vue')
const TareasCrearView= () => import('../views/TareasCrearView.vue')

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