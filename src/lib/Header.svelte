<script lang="ts">
  import dayjs from "dayjs";
  import "dayjs/locale/ar";

  dayjs.locale("ar");
  let day = dayjs().format("a") == "ص" ? "صباح" : "مساء";
</script>

<header class="flex justify-between">
  <div>
    <h1 class="text-4xl mb-4">{day} الخير 👋</h1>
    <h2 class="text-xl text-surface-900/45">
      {dayjs().format(" اليوم, dddd D MMM YYYY")}
    </h2>
  </div>

  <div class="bg-red-600 h-12 w-32"></div>
</header>
