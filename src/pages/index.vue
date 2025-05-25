<template>
    <div>
        <h1>Home Page</h1>
        <RouterLink :to="{name : '/projects/[id]', params : { id : 1} }">Go To Project 1</RouterLink>
    </div>
</template>

<script setup>
import { supabase } from '@/lib/supabaseClient';
import { onMounted } from 'vue';

const getporjects = async () => {
    const { data , error } = await supabase.from('projects').select();

    if(error) {
        console.log("Error is Here", error);
    }

    console.log(data);
}

onMounted(() => {
    getporjects()
})

</script>

<style lang="css" scoped>

</style>



<!-- vue route link for use single application 
with a tag run to link page refresh 
but RouteLin not refresh and support for single Page -->


 <!-- Enhanced Routing with unPlugin vue router 
 from vue school -->