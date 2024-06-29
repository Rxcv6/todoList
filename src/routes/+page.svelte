<script lang="ts">
  import Header from "$lib/Header.svelte";
  import {tasks} from "$lib/stores/tasks"; 

  
</script>

<div class="p-16 flex flex-col gap-8">
  <Header />
  <div class="input-group input-group-divider flex justify-between">
    <input
      class="flex-1 !bg-white"
      type="search"
      placeholder="ادخل عنوان المهمة"
    />
    <button class="variant-filled-primary">اضافة</button>
  </div>
</div>
