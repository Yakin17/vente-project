<template>
  <ion-app>
    <ion-router-outlet v-if="connected"></ion-router-outlet>
    <login-vue v-else @loginEmitted="connected = true"></login-vue>
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import LoginVue from './components/LoginVue.vue';

export default defineComponent({
  name:'app',
  components:{
    IonApp,
    IonRouterOutlet,
    LoginVue,
  },
  data(){
    return {
      connected: false,
    };
  }
});
</script>
