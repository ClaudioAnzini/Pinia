import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    {id: 1, name: 'Liquidificador', price: 79.90, qty: 100},
    {id: 2, name: 'Batedeira', price: 179.90, qty: 50},
    {id: 3, name: 'Chuveiro elétrico', price: 99.90, qty: 30},
    {id: 4, name: 'Mixer', price: 39.90, qty: 150},
    {id: 5, name: 'Panela de pressão', price: 279.90, qty: 110},
  ])

  return { products }
})
