export const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: 'bg-yellow-100 text-yellow-800',
  TypeScript: 'bg-blue-100 text-blue-800',
  Python: 'bg-green-100 text-green-800',
  Java: 'bg-red-100 text-red-800',
  'C++': 'bg-purple-100 text-purple-800',
  'C#': 'bg-purple-100 text-purple-800',
  Go: 'bg-cyan-100 text-cyan-800',
  Rust: 'bg-orange-100 text-orange-800',
  PHP: 'bg-indigo-100 text-indigo-800',
  Ruby: 'bg-red-100 text-red-800',
  Swift: 'bg-orange-100 text-orange-800',
  Kotlin: 'bg-purple-100 text-purple-800',
  Vue: 'bg-green-100 text-green-800',
  React: 'bg-blue-100 text-blue-800',
  HTML: 'bg-orange-100 text-orange-800',
  CSS: 'bg-blue-100 text-blue-800',
  Svelte: 'bg-orange-100 text-orange-800',
};

export const getLanguageColor = (language: string): string => {
  return LANGUAGE_COLORS[language] || 'bg-gray-100 text-gray-800';
};
