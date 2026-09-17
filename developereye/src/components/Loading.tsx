import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#129fe5]/10 blur-3xl" />
        <div className="absolute left-[30%] top-[35%] h-40 w-40 rounded-full bg-[#17429a]/5 blur-3xl" />
      </div>

      <div className="relative flex w-full max-w-xl flex-col items-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-[520px]"
        >
          <img
            src="/logo/navlog.png"
            alt="Developer Eye"
            className="h-auto w-full object-contain drop-shadow-[0_12px_30px_rgba(23,66,154,0.12)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mt-8 flex flex-col items-center"
        >
          <p className="text-sm font-semibold tracking-[0.22em] text-[#17429a]">
            BUILDING THE FUTURE
          </p>

          <div className="mt-5 h-1.5 w-52 overflow-hidden rounded-full bg-slate-100">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#17429a] via-[#4b35d9] to-[#129fe5]"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>

          <motion.p
            animate={{ opacity: [0.45, 1, 0.45] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="mt-4 text-xs font-medium text-slate-400"
          >
            Loading Developer Eye...
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Loading;
