<template>
  <ion-loading
    :is-open="isOpenRef"
    message="A carregar..."
    :duration="timeout"
    @didDismiss="setOpen(false)"
  >
  </ion-loading>

  <ion-menu side="start" menu-id="first" content-id="main">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Filtros</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>

  <ion-router-outlet id="main"></ion-router-outlet>

  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button auto-hide="false"></ion-menu-button>
        </ion-buttons>
        <ion-buttons slot="secondary">
          <ion-button>
            <ion-icon slot="icon-only" :icon="star"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Carica</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="container">
        <BeerCard v-for="(beer, index) in beers" :key="index" :data="beer" />
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import {
  IonLoading,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonList,
  IonMenu,
  IonRouterOutlet,
  IonButton,
  IonButtons,
  menuController,
} from "@ionic/vue";
import BeerCard from "../components/BeerCard.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    IonLoading,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonItem,
    IonList,
    IonMenu,
    IonRouterOutlet,
    IonButton,
    IonButtons,
    BeerCard,
  },
  props: {
    timeout: { type: Number, default: 1500 },
  },
  data() {
    return {
      beers: null,
    };
  },
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state) => (isOpenRef.value = true);

    return { isOpenRef, setOpen };
  },
  methods: {
    getAll() {
      fetch("http://94.130.111.205:3000/get/all").then((response) => {
        response.json().then((info) => {
          this.beers = info;
        });
      });
    },
    openFirst() {
      menuController.enable(true, "first");
      menuController.open("first");
    },
  },
  mounted() {
    this.getAll();
    this.setOpen(true);
  },
});
</script>
