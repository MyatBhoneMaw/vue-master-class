<template>
    <div>
        <h1>Home Projects</h1>
        <RouterLink to="/">Go Home</RouterLink>
        <div>{{ projects }}</div>
    </div>
</template>

<script setup>
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'
 const projects = ref()

;(async () => {
  const { data, error } = await supabase.from('projects').select()

  if (error) console.log(error)
  projects.value = data

    console.log("projects", data);
})()
</script>

<style lang="css" scoped>

</style>