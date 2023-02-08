<script setup>
import { computed } from 'vue';

const props = defineProps({
  date: String,
  detail: Array,
});

const total = computed(() => {
  return props.detail.reduce((acc, curr) => acc + curr.pengeluaran, 0);
});
</script>

<template>
  <div class="shadow-sm border">
    <table class="w-full text-gray-900 bg-white">
      <caption
        class="px-4 py-3 font-medium text-left text-white bg-green-ocean"
      >
        {{
          date.replace('2023', '')
        }}
      </caption>
      <tbody class="border-t">
        <tr class="border-b" v-for="expense in detail" :key="expense.nama">
          <td class="px-4 py-3">{{ expense.jam }}</td>
          <td class="px-4 py-3">{{ expense.nama }}</td>
          <td class="px-4 py-3 text-right">
            {{
              $formatNumber(expense.pengeluaran, {
                style: 'currency',
                currency: 'IDR',
              })
            }}
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr class="border-t-2">
          <td class="font-semibold px-4 py-3">Total</td>
          <td class="text-right font-semibold px-4 py-3" colspan="2">
            {{ $formatNumber(total, { style: 'currency', currency: 'IDR' }) }}
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
