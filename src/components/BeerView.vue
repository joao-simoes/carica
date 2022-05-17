<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    {{ desc }}
  </ion-content>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BeerView',
  props: {
    title: { type: String, default: 'Title' },
    desc: { type: String, default: 'Description' }
  },
  components: { IonContent, IonHeader, IonTitle, IonToolbar }
})
</script>