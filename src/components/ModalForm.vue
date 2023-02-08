<script setup>
import { useExpensesStore } from '../stores/expenses';
import { ref } from 'vue';

const storeExpense = useExpensesStore();
const nama = ref('');
const pengeluaran = ref('');
const showModal = ref(false);

const onSubmit = (e) => {
  e.preventDefault();

  storeExpense.addExpense(nama.value, pengeluaran.value);

  nama.value = '';
  pengeluaran.value = '';
  showModal.value = false;
};
</script>

<template>
  <button @click="showModal = true" class="button-primary mt-4">
    Tambah Item
  </button>
  <div class="fixed inset-0 z-10 bg-black/[.5]" v-if="showModal">
    <div class="flex items-center justify-center h-screen z-50">
      <div
        class="text-left h-fit bg-white rounded-lg p-5 lg:p-7 mx-4"
        v-if="showModal"
      >
        <h3 class="mb-5 text-xl font-semibold text-gray-900">
          Tambah Entri Pengeluaran
        </h3>
        <form @submit="onSubmit" class="space-y-4">
          <div>
            <label
              for="nama"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Nama
            </label>
            <input
              type="text"
              v-model="nama"
              class="input-field"
              placeholder="Masukkan nama pengeluaran"
              required
            />
          </div>
          <div>
            <label
              for="pengeluaran"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Harga
            </label>
            <input
              type="number"
              v-model="pengeluaran"
              placeholder="Masukkan harga pengeluaran"
              class="input-field"
              required
            />
          </div>
          <div class="flex justify-end gap-x-3 pt-2">
            <button class="button-disabled" @click="showModal = false">
              Batal
            </button>
            <button type="submit" class="button-primary">Kirim</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
