export const colors = {
  brand: {
    yellow: '#FFB703',
    orange: '#FB8500',
    blue: '#219EBC',
    deepBlue: '#023047',
    white: '#F2EEE7',
  },
  system: {
    white: '#F5F7F9',
    stroke: '#F1F0F0',
    section: '#EFEFEF',
    subsection: '#E9E9E9',
    disable: '#AFD8E2',
  },
  text: {
    principal: '#484560',
  },
} as const;

// Type para autocompletar
export type Colors = typeof colors;

// Export individual para facilitar importação
export const {
  brand,
  system,
  text,
} = colors;