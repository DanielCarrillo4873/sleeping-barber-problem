<template>

  <div
    class="card"
    :class="{
      'has-background-warning': barber,
      'has-background-warning-light': !barber,
    }"
  >

    <div class="card-header">
      <div class="card-header-title">
        Barber {{barber ? ' - Occupied' : ''}}
      </div>
    </div>

    <div class="card-content">
      <p>
        {{barber ? 'Client ' + barber +" is in barber's chair" : 'Barber free'}}
      </p>
    </div>

    <div class="card-footer">
      <a href="#" class="card-footer-item has-text-danger" @click.prevent="freeBarber()">
        <i class="fa-solid fa-arrow-right-from-bracket"></i>
      </a>
    </div>

  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'BarberComponent',
  computed: {
    ...mapState(['barber'])
  },
  methods: {
    ...mapMutations(['freeBarber'])
  },
}
</script>

<style scoped>

</style>
