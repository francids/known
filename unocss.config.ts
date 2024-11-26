import { defineConfig } from 'unocss';
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
      }
    ],
    [
      'container',
      {
        'max-width': '800px',
        'width': '100%',
        'margin': '1rem auto',
        'padding': '0',
      }
    ],
  ],
});
