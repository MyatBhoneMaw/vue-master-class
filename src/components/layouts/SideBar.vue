<template>
  <aside
    class="flex flex-col h-screen gap-2 border-r fixed bg-muted/40 lg:w-52 w-16 transition-[width]"
  >
    <div class="flex h-16 items-center border-b px-2 lg:px-4 shrink-0 gap-1 justify-between">
      <Button variant="outline" size="icon" class="w-8 h-8">
        <iconify-icon icon="lucide:menu"></iconify-icon>
      </Button>

      <button variant="outline" size="icon" class="w-8 h-8">
        <iconify-icon icon="lucide:plus"></iconify-icon>
      </button>
    </div>

    <nav class="flex flex-col gap-2 justify-between h-full relative">
      <div>
       <SidebarLink :links="links"/>
      </div>

      <div class="border-y text-center bg-background py-3">
        <SidebarLink :links="accountLinks" />
      </div>
    </nav>
  </aside>
</template>

<script lang="ts" setup>
import SidebarLink from './SidebarLink.vue';
import { Button } from '@/components/ui/button';

const links = [
    {
        title : 'Dashboard',
        to: '/',
        icon : 'lucide-house'
    },
    {
        title : 'Projects',
        to: '/projects',
        icon : 'lucide:building-2'
    },
    {
        title : 'My tasks',
        to: '/tasks',
        icon : 'lucide-badge-check'
    },
]

// account links
const accountLinks = [
    {
        title : 'Profile',
        to : '/profile',
        icon : 'lucide:user'
    },
    {
        title : 'Settings',
        to : '/setting',
        icon : 'lucide:settings'
    },   
    {
        title : 'Sign Out',
        to : '/signout',
        icon : 'lucide:log-out'
    },
]
</script>

<style lang="scss" scoped>

</style>