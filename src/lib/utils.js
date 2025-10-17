// src/lib/utils.js

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  // clsx gestisce le classi condizionali, gli array, ecc.
  // twMerge gestisce la risoluzione intelligente dei conflitti Tailwind.
  return twMerge(clsx(inputs));
}