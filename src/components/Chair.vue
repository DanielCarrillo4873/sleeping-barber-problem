<template>
  <div
      class="card has-text-white"
      :class="{
        'has-background-danger': client,
        'has-background-success': !client,
      }"
  >
    <div class="card-header">
      <div class="card-header-title is-centered has-text-white">
        Chair {{chair}}
      </div>
    </div>
    <div class="card-content">
      <p v-if="client">Chair occupied by client: {{client}}</p>
      <p v-else>Chair is free</p>
    </div>
    <div class="card-footer">
      <a @click.prevent="freeChair(chair - 1)" class="card-footer-item has-text-white">
        <i class="fa-solid fa-arrow-right-from-bracket"></i>
      </a>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
  name: 'ChairComponent',
  props: ["chair", "client"],
  methods: {
    ...mapMutations(["freeChair"]),
  }
}
</script>

<style scoped>

</style>
