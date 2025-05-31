<script setup lang="ts">
import { columns } from '@/utils/tableColumns/taskColumns'
import type { Projects } from '@/utils/supaQueries'
import { projectQuery } from '@/utils/supaQueries'

usePageStore().pageData.title = 'Projects'

const projects = ref<Projects | null>(null)
const getProjects = async () => {
  const { data, error } = await projectQuery

  if (error) console.log(error)

  projects.value = data
}

await getProjects()
</script>

<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>