import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CountState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const useCountStorePersist = create<CountState>()(
  persist(
    set => ({
      count: 0,

      increment: () =>
        set(state => ({
          count: state.count + 1,
        })),

      decrement: () =>
        set(state => ({
          count: state.count - 1,
        })),
    }),
    {
      name: 'count-storage', // Required: name of item in storage
    }
  )
);
