import { defineStore } from 'pinia';
import axios from 'axios';

export const useExpensesStore = defineStore('expenses', {
  state: () => ({ expenses: [] }),
  actions: {
    async fetchExpenses() {
      try {
        const response = await axios.get('http://localhost:3000/detail');
        this.expenses = response.data;
      } catch (err) {
        console.error(err);
      }
    },
    addExpense(nama, pengeluaran) {
      const today = new Date();

      const jam = today.toLocaleTimeString('en-EN', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
      });

      const tanggal = today.toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      const expense = {
        jam,
        nama,
        pengeluaran,
        tanggal,
      };
      this.expenses = [expense, ...this.expenses];
    },
  },
});
