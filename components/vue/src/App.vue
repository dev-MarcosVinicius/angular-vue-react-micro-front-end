<template>
  <div class="component">
    <img style="width: 400px; important!" alt="Vue Image" src="https://images.unsplash.com/photo-1639413665566-2f75adf7b7ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80">
    <p>Aqui é um componente VueJS</p>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
.component {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
}
</style>
