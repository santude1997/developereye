import { forwardRef, ButtonHTMLAttributes, ReactNode } from "react";
import { FiLoader } from "react-icons/fi";
import Loading from "./Loading";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500",
  secondary:
    "bg-secondary text-dark hover:bg-secondary-dark hover:text-white focus:ring-secondary",
  outline:
    "border border-slate-300 text-slate-700 hover:bg-slate-50 focus:ring-primary-500",
  ghost: "text-slate-600 hover:bg-slate-100 focus:ring-primary-500",
  danger: "bg-error text-white hover:bg-red-700 focus:ring-error",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-base",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      className = "",
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={`inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        {...props}
      >
        {loading && <Loading />}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
