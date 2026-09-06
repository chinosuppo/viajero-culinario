export const FILTER_OPTIONS = [
  { value: 'facil', label: 'Solo recetas fáciles', hint: '🟢 prioriza países con opciones fáciles' },
  { value: 'todas', label: 'Mostrar todas', hint: '🟢🟡 fácil + medio (default)' },
  { value: 'desafiante', label: 'Incluir desafiantes', hint: '🟢🟡🔴 sin límites' },
];

export const ACCESIBILIDAD_INFO = {
  verde: { emoji: '🟢', label: 'Fácil: supermercado local' },
  amarillo: { emoji: '🟡', label: 'Medio: dietética, feria o mercado' },
  rojo: { emoji: '🔴', label: 'Desafiante: tienda especializada o pedido online' },
};

export function matchesFilter(accesibilidad, filter) {
  if (filter === 'facil') return accesibilidad === 'verde';
  if (filter === 'desafiante') return true;
  return accesibilidad === 'verde' || accesibilidad === 'amarillo';
}
