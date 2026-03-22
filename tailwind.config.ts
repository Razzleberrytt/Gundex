import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        colorPalette: {
          light: {
            primary: '#F5F5F5',
            secondary: '#E8E8E3',
            surface: '#FFFFFF',
            text: '#1E2328'
          },
          dark: {
            primary: '#121417',
            secondary: '#1B1F24',
            surface: '#242B31',
            text: '#E6E8EB'
          },
          olive: '#6B7A3D',
          bronze: '#A5723B',
          'electric-blue': '#4DA3FF'
        },
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        surface: 'var(--bg-surface)',
        'text-primary': 'var(--text-primary)',
        'text-muted': 'var(--text-muted)',
        accent: 'var(--accent)',
        'accent-soft': 'var(--accent-soft)',
        border: 'var(--border-color)'
      }
    }
  }
} satisfies Config;
