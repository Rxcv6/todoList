<script lang="ts">
  import { tasks } from "$lib/stores/tasks";
  import TaskListItme from "./TaskListItme.svelte";
  import { fade } from "svelte/transition";
</script>

{#if $tasks.length == 0}
  <div class="flex flex-col justify-center items-center h-[50dvh]">
    <img src="/motvition.png" class="w-48 h-48" alt=""/>
    .ليس هناك تحدٍ أكبر من تحسين ذاتك وتطويرها ضع مهامك الان

</div>
{:else}
    {#if $tasks.filter((task) => !task.isDone).length > 0}
    <ol transition:fade class="  flex flex-col gap-1">
      <h3>المهام المتبقية:</h3>
      <TaskListItme doneTask={false} />
    </ol>
    {/if}
   {#if $tasks.filter((task) => task.isDone).length > 0}
    <ol transition:fade class=" flex flex-col gap-1">
      <h3>المهام المكتملة.</h3>
      <TaskListItme doneTask={true} />
    </ol>
    {/if}
{/if}
