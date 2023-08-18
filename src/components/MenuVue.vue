<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/home">
          <ion-icon :icon="home"></ion-icon>
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="cart" href="/liste">
          <ion-icon :icon="cart"></ion-icon>
          <ion-label>Liste de voiture a vendre</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="library" href="/ListeAchat">
          <ion-icon :icon="library"></ion-icon>
          <ion-label>Library</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="search" href="/search">
          <ion-icon :icon="search" ></ion-icon>
          <ion-label>Search</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
  import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';
  

  import {  library, search,home, cart } from 'ionicons/icons';

  export default {
    components: { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon },
    data() {
      return {
       
        library,
        search,
        home,
        cart
      };
    },
  };
</script>