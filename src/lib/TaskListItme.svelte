<script lang="ts">
  import dayjs from "dayjs";
  import Delete from "$lib/icons/delete.svelte";
  import relativeTime from "dayjs/plugin/relativeTime";
  import { tasks } from "$lib/stores/tasks";
  import type { ModalSettings, PopupSettings } from "@skeletonlabs/skeleton";
  import { getModalStore } from "@skeletonlabs/skeleton";
  import {  slide } from "svelte/transition";
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
</script>

{#each $tasks as task}
  {#if task.isDone == doneTask && $filter == "جميع المهام" && dayjs(task.assignedDate).unix() - dayjs().unix() <= 24 * 60 * 60}
    <li
      class="bg-secondary-500 p-2 rounded-2xl flex justify-between items-center"
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
        <button class="btn variant-filled-surface hover:bg-surface-700/75">
          {dayjs().to(task.assignedDate)}
        </button>
        <button
          class="btn variant-filled-surface hover:bg-surface-700/75"
          on:click={() => confirmDelete(task)}><Delete /></button
        >
      </div>
    </li>
  {/if}
{/each}
