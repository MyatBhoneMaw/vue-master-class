<script setup lang="ts">
</script>

<template>
  <nav class="h-16 border-b border-b-cyan-900 bg-muted/40 flex justify-between px-5 items-center">
    <form class="w-full max-w-96">
      <input class="w-full pl-8 bg-gray-800 rounded" placeholder="Search In...." type="text">
    </form>
    <div class="h-8 w-8 rounded-full bg-white"></div>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
</style>
