<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header-title is-centered">
        Client {{client.id}}
      </div>
    </div>
    <div class="card-footer">
      <a href="" class="card-footer-item" @click.prevent="accessBarber">
        <i class="fa-solid fa-hammer" />
      </a>
      <a href="" class="card-footer-item has-text-danger" @click.prevent="deleteClient(client.id)" >
        <i class="fa-solid fa-square-xmark"></i>
      </a>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapState} from 'vuex'

export default {
  name: 'ClientComponent',
  props: ['client'],
  computed: {
    ...mapGetters(["freeChair"]),
    ...mapState(["barber"])
  },
  methods: {
    ...mapMutations(['deleteClient', 'useBarber']),
    accessBarber(){
      if(this.freeChair < 0 && this.barber){
        alert("Barber and waiting charis are occupied")
      }else{
        this.useBarber(this.client.id)
      }
    }
  }
}
</script>

<style scoped>

</style>
