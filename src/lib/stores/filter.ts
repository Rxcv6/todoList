import { persisted } from "svelte-persisted-store";
export const filter =persisted<'جميع المهام' | "مهام اليوم" | "مهامك خلال شهر"| "مهامك الفائتة">('filter', 'جميع المهام')