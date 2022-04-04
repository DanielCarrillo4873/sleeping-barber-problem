<template>

  <!-- Main Hero -->
  <section class="hero is-primary mb-5">
    <div class="hero-body">
      <p class="title">
        Sleeping Barber Problem
      </p>
      <p class="sub-title">
        An implementation of sleeping barber problem
      </p>
    </div>
  </section>

  <div class="container">

    <!-- Barber -->
    <div class="columns">
      <div class="column">
        <Barber />
      </div>
    </div>

    <!-- Waiting chairs -->
    <div class="columns">
      <div class="column" v-for="i in 3" :key="i">
        <Chair :chair="i" :process="i" />
      </div>
    </div>

    <section class="section">
      <button class="button is-success" @click.prevent="$store.commit('createClient')">
        Add client <i class="ml-2 fa-solid fa-circle-plus"></i>
      </button>
    </section>

    <!-- Clients -->
    <div class="columns is-multiline">
      <div v-for="client in clients" class="column is-2" :key="client.id">
        <Client :client="client" />
      </div>
    </div>

  </div>

</template>

<script>
import Barber from '@/components/Barber.vue';
import Client from '@/components/Client.vue';
import Chair from '@/components/Chair.vue';
import {mapGetters} from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters({
      clients: 'freeClients'
    }),
  },
  mounted() {
    for (let i = 0; i < 5; i++) {
      this.$store.commit('createClient')
    }
  },
  components: {
    Barber,
    Client,
    Chair,
  }
}
</script>

<style>
</style>
