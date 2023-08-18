<template>
    <ion-title>Login</ion-title>
    

    <ion-content> 
        <ion-item>
            <ion-input label="Text input" placeholder="Enter your name"></ion-input>
         </ion-item>

         <ion-item>
            <ion-input label="Email input" type="email" placeholder="email@domain.com"></ion-input>
        </ion-item>
        <ion-item>
          <ion-input label="Password input" type="password" value="password"></ion-input>
        </ion-item>

       
        <ion-button expand="block" shape="round" @click="$emit('loginEmitted')" >Login</ion-button>
     </ion-content>

</template>

<script>
  import { IonInput, IonItem, IonContent,IonTitle } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
  
    components: { IonInput, IonItem,IonContent,IonTitle },
  });
</script>
