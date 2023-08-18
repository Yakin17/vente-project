<template>
  <ion-page>
  <ion-header>
    <ion-toolbar>
      <ion-title>
        Accueil
      </ion-title>
    </ion-toolbar>
  </ion-header>
  
  <ion-content>
    <div class="container">
      <h1>Bienvenue</h1>
    </div>
  </ion-content>
  </ion-page>
  
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

export default{
  components:{
    IonContent,
     IonHeader,
      IonPage,
       IonTitle,
        IonToolbar,
  }
}
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
