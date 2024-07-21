<script lang="ts">
  import Header from "$lib/Header.svelte";
  import Taskinput from "$lib/Taskinput.svelte";
  import TaskList from "$lib/TaskList.svelte";
</script>

<svelte:head>
  <title>متتبع المهام</title>
</svelte:head>

<div
  class=" p-2 sm:p-4 pt-6 md:p-8 lg:p-12 xl:p-16 flex flex-col gap-8 max-w-screen-lg justify-center mx-auto"
>
  <Header />
  <Taskinput />
  <TaskList />
</div>
