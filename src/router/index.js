import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import MenuVue from '../components/MenuVue.vue'
import AchatVue from '../components/AchatVue.vue'
import ListeVoiture from '../components/ListeVoiture.vue'
import VoitureVendu from '../components/VoitureVendu.vue'
import ListeAchat from '../components/ListeAchat.vue'
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    component: MenuVue,
    children: [
      {
        path: '',
        redirect: '/home',
      },
      {
        path: 'home',
        component: HomePage,
      },
      {
        path: 'achat',
        component: AchatVue
      },
      {
        path: 'liste',
        component: ListeVoiture,
      },
      {
        path: 'voiturevendu',
        component:VoitureVendu,
      },
      {
        path: 'ListeAchat',
        component:ListeAchat,
      },
    ],
  },
];

const router = createRouter({
  // Use: createWebHistory(process.env.BASE_URL) in your app
  history: createWebHistory(),
  routes,
});

export default router;
