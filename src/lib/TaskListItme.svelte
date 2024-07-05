<script lang="ts">
  import dayjs from "dayjs";
  import Menu from "$lib/icons/menu.svelte";
  import Delete from "$lib/icons/delete.svelte";
  import { tasks } from "$lib/stores/tasks";
  import { popup } from "@skeletonlabs/skeleton";
  import type { ModalSettings, PopupSettings } from "@skeletonlabs/skeleton";
  import { getModalStore } from "@skeletonlabs/skeleton";
  import { slide } from "svelte/transition";

  const modalStore = getModalStore();

  const popupClick: PopupSettings = {
    event: "click",
    target: "popupClick",
    placement: "top",
  };

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
  {#if task.isDone == doneTask}
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
          {dayjs(task.assignedDate).format("hh:mm")}
        </button>
        <button
          class="btn variant-filled-surface hover:bg-surface-700/75 "
          use:popup={popupClick}><Menu /></button
        >

        <div class="card p-4 max-w-sm" data-popup="popupClick">
          <div class="grid grid-cols-1 gap-2">
            <button
              class="btn variant-filled-surface hover:bg-surface-700/75"
              on:click={() => confirmDelete(task)}
            >
              حذف المهمة
            </button>
            <button class="btn variant-filled-surface hover:bg-surface-700/75">
              تمديد الوقت
            </button>
          </div>
          <div class="arrow bg-surface-100-800-token" />
        </div>
      </div>
    </li>
  {/if}
{/each}
