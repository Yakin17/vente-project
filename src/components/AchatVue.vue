<template>
    <ion-page>
    <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button  @click="cancel">CanCel</ion-button>
          </ion-buttons>
          <ion-title>
            Achat 
          </ion-title>
          <ion-buttons slot="end">
            <ion-button @click="confirm">
             Confirm
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      
      <ion-content>
        <div class="container">
          <ion-item>
            <ion-label>Nom du client</ion-label>
            <ion-input type="text"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Voiture achetees</ion-label>
            <ion-input type="number"></ion-input>
          </ion-item>
          <ion-button expand="full">Enregistrer</ion-button>
        </div>
      </ion-content>
    </ion-page>
</template>
<script>
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  
    IonItem,
  
    IonLabel,
    IonButton,
    modalController,
  
  } from '@ionic/vue';
  export default {
    components:{
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
      IonItem,
      IonLabel,
      IonButton,
  
    },
    methods: {
      cancel() {
        return modalController.dismiss(null, "cancel");
      },
      confirm() {
        return modalController.dismiss(this.name, "confirm");
      },


  }
  }
  </script>
  
  <style scoped>
  
  </style>