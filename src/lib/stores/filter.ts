import { persisted } from "svelte-persisted-store";
export const filter =persisted<'جميع المهام' | "مهام اليوم" | "مهام الشهر"| "مهامك الفائتة">('filter', 'جميع المهام')