import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiInfo, FiX, FiXCircle } from "react-icons/fi";

type ToastVariant = "success" | "error" | "info";

interface ToastItem {
  id: string;
  message: string;
  variant: ToastVariant;
}

interface ToastContextValue {
  showToast: (message: string, variant?: ToastVariant) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export const useToast = (): ToastContextValue => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
};

const variantStyles: Record<ToastVariant, string> = {
  success: "bg-green-600",
  error: "bg-red-600",
  info: "bg-primary-600",
};

const variantIcon: Record<ToastVariant, JSX.Element> = {
  success: <FiCheckCircle size={18} aria-hidden="true" />,
  error: <FiXCircle size={18} aria-hidden="true" />,
  info: <FiInfo size={18} aria-hidden="true" />,
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = useCallback(
    (message: string, variant: ToastVariant = "info") => {
      const id = Date.now().toString();
      setToasts((prev) => [...prev, { id, message, variant }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 4000);
    },
    [],
  );

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        className="fixed bottom-4 right-4 z-50 flex flex-col gap-2"
        aria-live="polite"
      >
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.25 }}
              className={`flex items-center gap-2 text-white px-4 py-3 rounded-lg shadow-lg min-w-[240px] ${variantStyles[toast.variant]}`}
            >
              {variantIcon[toast.variant]}
              <span className="text-sm font-medium flex-1">
                {toast.message}
              </span>
              <button
                onClick={() => removeToast(toast.id)}
                aria-label="Close notification"
                className="opacity-80 hover:opacity-100"
              >
                <FiX size={16} aria-hidden="true" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};
