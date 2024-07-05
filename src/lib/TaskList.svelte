<script lang="ts">
  import dayjs from "dayjs";
  import Menu from "$lib/icons/menu.svelte";
  import { tasks } from "$lib/stores/tasks";
  import TaskListItme from "./TaskListItme.svelte";
</script>

<ol class=" flex flex-col gap-1">
  <h3>المهام المتبقية:</h3>
  <TaskListItme doneTask={false} />
</ol>
<ol class=" flex flex-col gap-1">
  <h3>المهام المكتملة.</h3>
  <TaskListItme doneTask={true} />
</ol>
