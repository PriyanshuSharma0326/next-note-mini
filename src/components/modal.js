"use client";

import { useCallback, useRef, useEffect, MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

export default function Modal({ children }) {
    const overlay = useRef(null);
    const wrapper = useRef(null);
    const router = useRouter();

    const onDismiss = useCallback(() => {
        router.back();
    }, [router]);

    const onClick = useCallback(
        (e) => {
          if (e.target === overlay.current || e.target === wrapper.current) {
            if (onDismiss) onDismiss();
          }
        },
        [onDismiss, overlay, wrapper]
    );

    const onKeyDown = useCallback(
        (e) => {
          if (e.key === "Escape") onDismiss();
        },
        [onDismiss]
    );
    
    useEffect(() => {
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [onKeyDown]);

    return (
        <div
            ref={overlay}
            className="fixed w-screen h-screen z-10 left-0 top-0 bottom-0 bg-black/40 flex flex-col items-center justify-center"
            onClick={onClick}
        >
            <div
                ref={wrapper} 
                className="p-4 flex flex-col gap-2 w-[30%] max-h-[50%] border-[3px] bg-white/10 border-[#B0B0B0] rounded-md"
            >
                {children}
            </div>
        </div>
    );
}
