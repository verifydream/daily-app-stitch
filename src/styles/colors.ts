// Theme colors object
const themeColorValues = {
  light: {
    primary: '#14b8a6',
    secondary: '#f97316',
    background: '#f8fafc',
    surface: '#ffffff',
    textPrimary: '#0f172a',
    textSecondary: '#64748b',
    income: '#10b981',
    expense: '#ef4444',
    statusPending: '#f97316',
    statusCompleted: '#10b981',
    statusOverdue: '#ef4444',
    danger: '#ef4444',
  },
  dark: {
    primary: '#14b8a6',
    secondary: '#f97316',
    background: '#1e293b',
    surface: '#334155',
    textPrimary: '#f8fafc',
    textSecondary: '#cbd5e1',
    income: '#10b981',
    expense: '#ef4444',
    statusPending: '#f97316',
    statusCompleted: '#10b981',
    statusOverdue: '#ef4444',
    danger: '#ef4444',
  },
};

// Flat colors for legacy usage
const flatColors = {
  primary: '#14b8a6',
  secondary: '#f97316',
  'background-light': '#f8fafc',
  'background-dark': '#1e293b',
  'surface-light': '#ffffff',
  'surface-dark': '#334155',
  'text-primary-light': '#0f172a',
  'text-primary-dark': '#f8fafc',
  'text-secondary-light': '#64748b',
  'text-secondary-dark': '#cbd5e1',
  'border-light': '#e2e8f0',
  'border-dark': '#475569',
};

// Combined export
export const colors = {
  ...themeColorValues,
  ...flatColors,
} as typeof themeColorValues & typeof flatColors;

// Helper function to get theme colors with null safety
export const getThemeColors = (colorScheme: 'light' | 'dark' | null | undefined) => {
  const scheme = colorScheme ?? 'light';
  return themeColorValues[scheme];
};
