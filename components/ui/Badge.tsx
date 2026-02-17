type BadgeVariant = 'default' | 'success' | 'warning' | 'info' | 'sale';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-white/20 text-white backdrop-blur-sm border border-white/10',
  success: 'bg-success/90 text-white shadow-sm',
  warning: 'bg-secondary/90 text-white shadow-sm',
  info: 'bg-primary-light/90 text-white shadow-sm',
  sale: 'bg-sale text-white shadow-sm animate-badge-pulse',
};

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
