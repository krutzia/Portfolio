import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useRouterState } from "@tanstack/react-router";
import { useAnimationMode } from "@/context/AnimationModeContext";

export function RouteTransition() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const { isMinimal } = useAnimationMode();

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: isMinimal ? 0 : 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: isMinimal ? 0 : -8 }}
        transition={{
          duration: isMinimal ? 0.2 : 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
}
