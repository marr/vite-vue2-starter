import { ref } from 'vue';

const count = ref(0);

export function useCount() {
  return {
    count,
    localCount: ref(0)
  }
} 