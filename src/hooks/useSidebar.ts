'use client';
import { MenuItem } from '@/types/types';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

/**
 * Custom hook to manage sidebar navigation state.
 *
 * @param {MenuItem[]} menuItems - Array of menu items with `id` and `href`.
 *
 * @returns {object} - Contains `activeItem` (currently active item ID) and `setActiveItem` to manually update it.
 */
export function useSidebar(menuItems: MenuItem[]) {
  // Track the active menu item by its `id`
  const [activeItem, setActiveItem] = useState<string | null>(null);

  // Get the current path to determine which menu item is active
  const pathname = usePathname();

  useEffect(() => {
    // Find the menu item matching the current URL and set it as active
    const currentItem = menuItems.find((item) => item.href === pathname);
    setActiveItem(currentItem ? currentItem.id : null); // Reset if no match
  }, [pathname, menuItems]);

  return {
    activeItem,
    setActiveItem,
  };
}
