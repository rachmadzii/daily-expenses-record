<script setup>
import ExpensesTable from './components/ExpensesTable.vue';
import MainHeader from './components/MainHeader.vue';

import { computed, onMounted } from 'vue';
import { useExpensesStore } from './stores/expenses.js';
import { storeToRefs } from 'pinia';

const store = useExpensesStore();
const { expenses } = storeToRefs(store);
const { fetchExpenses } = store;

onMounted(() => {
  fetchExpenses();
});

const groupedExpenses = computed(() => {
  let grouped = {};

  expenses.value.forEach((expense) => {
    if (!grouped[expense.tanggal]) {
      grouped[expense.tanggal] = [];
    }
    grouped[expense.tanggal].push(expense);
  });

  return grouped;
});

const totalExpenses = computed(() => {
  return expenses.value.reduce((sum, item) => sum + item.pengeluaran, 0);
});
</script>

<template>
  <header>
    <MainHeader :total="totalExpenses" />
  </header>

  <main>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <div v-for="(detail, date) in groupedExpenses" :key="date">
        <ExpensesTable :date="date" :detail="detail" />
      </div>
    </div>
  </main>
</template>
