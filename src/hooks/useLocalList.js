import { useCallback, useState } from "react";

export function useLocalList(key) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const add = useCallback(
    (item) => {
      setItems((prev) => {
        const next = [item, ...prev];
        localStorage.setItem(key, JSON.stringify(next));
        return next;
      });
    },
    [key]
  );

  return [items, add];
}
