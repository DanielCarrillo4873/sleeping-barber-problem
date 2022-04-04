<template>
  <div class="card has-background-danger has-text-white">
    <div class="card-header">
      <div class="card-header-title is-centered has-text-white">
        Chair {{chair}}
      </div>
    </div>
    <div class="card-content">
      <p>Chair occupied by process: {{process}}</p>
    </div>
    <div class="card-footer">
      <a href="#" class="card-footer-item has-text-white">
        <i class="fa-solid fa-arrow-right-from-bracket"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChairComponent',
  props: ['chair', 'process']
}
</script>

<style scoped>

</style>
