import { createContext, useContext, useState, type ReactNode } from 'react';

interface CountContextType {
  count: number;
  Increment: () => void;
  Decrement: () => void;
}
interface CountProviderProps {
  children: ReactNode;
}
const CountContext = createContext<CountContextType | null>(null);

export function CountContextProvider({ children }: CountProviderProps) {
  const [count, setCount] = useState<number>(0);

  const Increment = () => setCount(count + 1);
  const Decrement = () => setCount(count - 1);

  return (
    <CountContext.Provider value={{ count, Increment, Decrement }}>
      {children}
    </CountContext.Provider>
  );
}

// Custom Hook to use the NotificationContext
export function useCount() {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}
