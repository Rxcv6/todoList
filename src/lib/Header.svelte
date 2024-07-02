<script lang="ts">
    import{
        ListBox,
        ListBoxItem,
        popup, 
        type PopupSettings,
        
    }from '@skeletonlabs/skeleton';
  import dayjs from "dayjs";
  import "dayjs/locale/ar"; 
  import Arrow from '$lib/icons/Arrow.svelte';

  dayjs.locale("ar");
  let day = dayjs().format("a") == "ص" ? "صباح" : "مساء";

  let comboboxValue: string = 'جميع المهام';

  const popupCombobox: PopupSettings = {
    event: "click",
    target: "popupCombobox",
    placement: "bottom",
    closeQuery: ".listbox-item",
  };
</script>

<header class="flex justify-between">
  <div>
    <h1 class="text-2xl sm:text-4xl mb-4">{day} الخير 👋</h1>
    <h2 class="text-lg md:text-xl  text-surface-900/45">
      {dayjs().format(" اليوم, dddd D MMM YYYY")}
    </h2>
  </div>

  <button
    class="btn variant-filled-secondary w-40 h-fit justify-between  "
    use:popup={popupCombobox}
  >
    <span >{comboboxValue }</span>
    <span class="!m-0   ">
      <Arrow/>
    </span>
  </button>

  

<div class="card w-40 shadow-xl  py-2  " data-popup="popupCombobox">
	<ListBox rounded="rounded-none" active = "variant-filled-primary">
		<ListBoxItem bind:group={comboboxValue} name="medium" value="جميع المهام">جميع المهام</ListBoxItem>
		<ListBoxItem bind:group={comboboxValue} name="medium" value="مهام اليوم">مهام اليوم</ListBoxItem>
		
	</ListBox>
	<div class="arrow bg-surface-100-800-token" />
</div>
					
					
</header>
