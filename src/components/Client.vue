<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header-title is-centered">
        Client {{client.id}}
      </div>
    </div>
    <div class="card-footer">
      <a href="" class="card-footer-item" @click.prevent="useBarber(client.id)">
        <i class="fa-solid fa-hammer" />
      </a>
      <a href="" class="card-footer-item has-text-danger" @click.prevent="deleteClient(client.id)" >
        <i class="fa-solid fa-square-xmark"></i>
      </a>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: 'ClientComponent',
  props: ['client'],
  methods: {
    ...mapMutations(['deleteClient', 'useBarber'])
  },
}
</script>

<style scoped>

</style>
