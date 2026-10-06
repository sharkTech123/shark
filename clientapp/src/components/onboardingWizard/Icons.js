// Lightweight inline SVG icons — no external icon library needed,
// keeps the bundle small and avoids an extra dependency.

export function QuizIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M9.5 9a2.5 2.5 0 1 1 3.5 2.29c-.7.3-1 1-1 1.71v.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="17" r="1" fill="currentColor" />
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.6" opacity="0.35" />
    </svg>
  );
}

export function ProductIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6 8h12l-1 12H7L6 8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 8V6a3 3 0 0 1 6 0v2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CategoryIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3.5" y="5.5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="13.5" y="5.5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="3.5" y="15.5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="13.5" y="15.5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function ChevronIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRightIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Picks an icon component purely from the node's `type` — reliable since
// that field always comes from the backend enum (category | quiz | product).
export function iconForType(type) {
  if (type === 'quiz') return QuizIcon;
  if (type === 'product') return ProductIcon;
  return CategoryIcon;
}

// A rotating set of gradient classes (defined in the CSS module) so sibling
// cards at the same level get varied, colorful badges instead of one flat color.
const GRADIENT_COUNT = 6;
export function gradientForIndex(index) {
  return `grad${(index % GRADIENT_COUNT) + 1}`;
}