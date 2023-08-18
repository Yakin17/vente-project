<template>
  <ion-content color="light">
    <ion-list :inset="true">
      <ion-item>
        <ion-label>Super Mario World</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>Super Mario World</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>Super Mario World</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>Super Mario World</ion-label>
      </ion-item>
      <ion-fab slot="fixed" vertical="bottom" horizonta="end" @click="openAchat">
        <ion-fab-button>
        <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
      
    </ion-list>
  </ion-content>
</template>

<script>
  import { IonContent, IonItem, IonLabel, IonList, IonFab, IonFabButton,IonIcon,modalController } from '@ionic/vue';
  import { add } from 'ionicons/icons';
  import { defineComponent } from 'vue';
  import AchatVue from '../components/AchatVue.vue';
  

  export default defineComponent({
    components: { IonContent, IonItem, IonLabel, IonList, IonFab, IonFabButton, IonIcon },
      setup() {
      return { add };
      },
      methods : {
    async openAchat() {
      const modal = await modalController.create({
        component: AchatVue,
      });
      modal.present();

      const { data, role } = await modal.onWillDismiss();

      if (role === "confirm") {
        this.message = `Hello, ${data}!`;
      }
    },


  }

  });
</script>