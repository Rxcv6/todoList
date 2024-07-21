<script lang="ts">
  import { tasks } from "$lib/stores/tasks";
  import dayjs from "dayjs";
  import TaskList from "./TaskList.svelte";

  let title = "";
  let dateTime = dayjs().add(1, "hour").format("YYYY-MM-DDTHH:mm");

  function addTask() {
    tasks.update((currentTasks) => {
      currentTasks.push({
        title,
        assignedDate: dateTime,
        isDone: false,
      });
      return currentTasks.sort((a: Task, b: Task) => {
        return dayjs(a.assignedDate).unix() - dayjs(b.assignedDate).unix();
      });
    });
    title = "";
  }
</script>

<form
  class="input-group input-group-divider flex justify-between flex-col md:flex-row bg-blue-400/80"
>
  <input
    bind:value={title}
    class="flex-1 "
    type="search"
    placeholder="ادخل عنوان المهمة"
  />
  <input
    bind:value={dateTime}
    class="input w-fit"
    title="Input (datetime-local)"
    type="datetime-local"
  />
  <button  type="submit" disabled={title.trim().length == 0} class=" variant-filled-primary p-2 transition-all {title.trim().length == 0&& 'bg-blue-400/80 transition-all '}" on:click={addTask}>
    <span class="mx-auto">اضافة</span>
  </button>
</form>
