<template>
  <ion-content color="light">
    <ion-list v-for="voiture in voitures" :key="voiture.id">
      <ion-item>
        <h1>hjdjsdd</h1>
        <ion-label>{{ voiture.marque }}</ion-label>
      </ion-item>
      
      <ion-button expand="block" shape="round" @click="AfficheVoiture" >Login</ion-button>
      <ion-fab slot="fixed" vertical="bottom" horizonta="end" @click="openModal">
        <ion-fab-button>
        <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
      
    </ion-list>
  </ion-content>
</template>

<script>
  import axios from 'axios';
  import { IonContent, IonItem, IonLabel, IonList, IonFab, IonFabButton,IonIcon,modalController, IonButton } from '@ionic/vue';
  import { add } from 'ionicons/icons';
  import { defineComponent } from 'vue';
  import VoitureVendu from '../components/VoitureVendu.vue';
  

  export default defineComponent({
     data(){
      return {
        voitures: []
      }
    },
    components: { IonContent, IonItem, IonLabel, IonList, IonFab, IonFabButton, IonIcon, IonButton },
      setup() {
      return { add };
      },
      methods : {
    async openModal() {
      const modal = await modalController.create({
        component: VoitureVendu,
      });
      modal.present();

      const { data, role } = await modal.onWillDismiss();

      if (role === "confirm") {
        this.message = `Hello, ${data}!`;
      }
    },
     AfficheVoiture(){
        axios.get("http://127.0.0.1:8000/Voiture/")
        .then((response) =>{
          this.voitures= response.data.results  
        })
      }


  }

  });
</script>