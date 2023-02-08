<script setup>
import ModalForm from './ModalForm.vue';

const props = defineProps({
  total: Number,
});
</script>

<template>
  <div class="flex flex-col items-center text-center mb-10">
    <h1 class="text-2xl font-semibold leading-relaxed">
      Diari Jajan Februari 2023
    </h1>
    <h2 class="text-lg">
      Pengeluaran Bulan ini sebesar
      {{ $formatNumber(total, { style: 'currency', currency: 'IDR' }) }}
    </h2>
    <ModalForm />
  </div>
</template>
