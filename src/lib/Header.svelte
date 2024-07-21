<script lang="ts">
  import {
    ListBox,
    ListBoxItem,
    popup,
    type PopupSettings,
  } from "@skeletonlabs/skeleton";
  import dayjs from "dayjs";
  import "dayjs/locale/ar";
  import Arrow from "$lib/icons/Arrow.svelte";
  import { filter } from "$lib/stores/filter";

  dayjs.locale("ar");
  let day = dayjs().format("a") == "ص" ? "صباح" : "مساء";


  const popupCombobox: PopupSettings = {
    event: "click",
    target: "popupCombobox",
    placement: "bottom",
    closeQuery: ".listbox-item",
    state: (e: Record<string, boolean>) => {
      if (e.state) document.getElementById("arrow")?.classList.add("-rotate-90");
      else document.getElementById("arrow")?.classList.remove("-rotate-90");
    },
  };
</script>

<header class="flex justify-between">
  <div>
    <h1 class="text-2xl sm:text-4xl mb-4">{day} الخير 👋</h1>
    <h2 class="text-lg md:text-xl text-surface-900/45">
      {dayjs().format(" اليوم, dddd D MMM YYYY")}
    </h2>
  </div>

  <button
    class="btn variant-outline-primary variant-ringed-primary w-40 h-fit justify-between"
    use:popup={popupCombobox}
  >
    <span>{$filter}</span>
    <span class="!m-0">
      <Arrow />
    </span>
  </button>

  <div class="card w-40 shadow-xl bg-blue-400  py-2" data-popup="popupCombobox">
    <ListBox   rounded="rounded-none" hover="hover:bg-blue-800/70  text-blue-200"  active="variant-filled-primary">
      <ListBoxItem  bind:group={$filter} name="medium" value="جميع المهام"
        >جميع المهام</ListBoxItem
      >
      <ListBoxItem  bind:group={$filter} name="medium" value="مهامك الفائتة">  مهامك الفائتة </ListBoxItem>
      <ListBoxItem bind:group={$filter} name="medium" value="مهام اليوم"
        >مهام اليوم</ListBoxItem
      >
       <ListBoxItem bind:group={$filter} name="medium" value="مهامك خلال شهر"
        >مهامك خلال شهر</ListBoxItem
      >
        
    </ListBox>
    <div class="arrow bg-surface-100-800-token" />
  </div>
</header>
