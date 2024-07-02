<script lang="ts">
  import Header from "$lib/Header.svelte";
  import Taskinput from "$lib/Taskinput.svelte";
  import dayjs from "dayjs";
  import Menu from "$lib/icons/menu.svelte";
</script>

<div
  class="p-2 sm:p-4 pt-6 md:p-8 lg:p-12 xl:p-16 flex flex-col gap-8 max-w-screen-lg justify-center mx-auto"
>
  <Header />
  <Taskinput />
  <ol class=" flex flex-col gap-1">
    <li
      class="bg-secondary-500 p-2 rounded-2xl flex justify-between items-center"
    >

      <div class="flex justify-between">
        <input class="checkbox rounded-lg w-7 h-7 bg-surface-600/60  " type="checkbox" checked />
        <span class="pr-2">تسجيل </span>
      </div>
      <div class="flex gap-1">
        <button class="btn variant-filled-surface hover:bg-surface-700/75">
          {dayjs().format()}
        </button>
        <button class="btn variant-filled-surface hover:bg-surface-700/75">
          <Menu />
        </button>
      </div>
    </li>
     <li
      class="bg-secondary-500 p-2 rounded-2xl flex justify-between items-center"
    >
      <div class="flex justify-between">

        <input class="checkbox rounded-lg w-7 h-7 bg-surface-600/60" type="checkbox" checked />
        <span class="pr-2">تسجيل </span>
      </div>
      <div class="flex gap-1">
        <button class="btn variant-filled-surface hover:bg-surface-700/75">
          {dayjs().format()}
        </button>
        <button class="btn variant-filled-surface hover:bg-surface-700/75">
          <Menu />
        </button>
      </div>
    </li>
     <li

      class="bg-secondary-500 p-2 rounded-2xl flex justify-between items-center"
    >
      <div class="flex justify-between">
        <input class="checkbox rounded-lg w-7 h-7 bg-surface-600/60" type="checkbox" checked />
        <span class="pr-2">تسجيل </span>
      </div>
      <div class="flex gap-1">
        <button class="btn variant-filled-surface hover:bg-surface-700/75">
          {dayjs().format()}
        </button>
        <button class="btn variant-filled-surface hover:bg-surface-700/75">
          <Menu />
        </button>
      </div>
    </li>
  </ol>
</div>
