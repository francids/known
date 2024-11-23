import { defineConfig } from '@unocss/vite';
import { presetMini } from '@unocss/preset-mini';

export default defineConfig({
  presets: [presetMini()],
  rules: [
    [
      'topbar',
      {
        'height': '4rem',
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'space-between',
        'padding': '0 1rem',
      }
    ],
    [
      'container',
      {
        'max-width': '800px',
        'width': '100%',
        'margin': '0 auto',
        'padding': '0 1rem',
      }
    ],
  ],
});
