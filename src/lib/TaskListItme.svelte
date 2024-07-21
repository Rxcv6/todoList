<script lang="ts">
  import dayjs from "dayjs";
  import Delete from "$lib/icons/delete.svelte";
  import relativeTime from "dayjs/plugin/relativeTime";
  import { tasks } from "$lib/stores/tasks";
  import type { ModalSettings, PopupSettings } from "@skeletonlabs/skeleton";
  import { getModalStore } from "@skeletonlabs/skeleton";
  import { slide } from "svelte/transition";
  import { filter } from "$lib/stores/filter";

  dayjs.extend(relativeTime);

  const modalStore = getModalStore();

  export let doneTask: boolean;

  function confirmDelete(task: Task) {
    const modal: ModalSettings = {
      type: "confirm",
      // Data
      title: "هل تريد الحذف؟",
      body: `'${task.title}' :سيتم حذف المهمة`,
      // TRUE if confirm pressed, FALSE if cancel pressed

      buttonTextConfirm: "تأكيد",
      buttonTextCancel: "الغاء",
      
      response: (r: boolean) => {
        if (r) {
          tasks.update((currentTask) => {
            let index = currentTask.indexOf(task);
            currentTask;
            currentTask.splice(index, 1);
            return currentTask;
          });
        }
      },
    };
    modalStore.trigger(modal);
  }

  function applyFilter(filter: typeof $filter, task: Task): boolean {
   

    switch (filter) {
      case "مهامك الفائتة":
        return dayjs(task.assignedDate).unix() - dayjs().unix() < 0;
      
      case "مهام الشهر":
        return dayjs(task.assignedDate).unix() - dayjs().unix() <= 13*  24 * 60 * 60 && dayjs(task.assignedDate).unix() - dayjs().unix()>0 ;
      case "مهام اليوم":
        return dayjs(task.assignedDate).unix() - dayjs().unix() <= 24 * 60 * 60 && dayjs(task.assignedDate).unix() - dayjs().unix()>0 ;
      case "جميع المهام":
      default:
        return true;
    }
  }
</script>

{#each $tasks as task}
  {#if task.isDone == doneTask && applyFilter($filter, task)}
    <li
      class="bg-primary-500/75 text-white p-2 rounded-2xl flex justify-between items-center"
      transition:slide
    >
      <div class="flex justify-between">
        <input
          bind:checked={task.isDone}
          class="checkbox rounded-lg w-7 h-7 bg-surface-600/60"
          type="checkbox"
        />
        <span class="pr-2"> {task.title}</span>
      </div>
      <div class="flex gap-1">
        <button class="btn  bg-blue-400 hover:bg-blue-400/70">
          {dayjs().to(task.assignedDate)}
        </button>
        <button
          class="btn bg-blue-400 hover:bg-blue-400/70"
          on:click={() => confirmDelete(task)}><Delete /></button
        >
      </div>
    </li>
  {/if}
{/each}
