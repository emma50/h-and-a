import React, { useEffect, useState } from "react";
import { Dialog, Button } from "@chakra-ui/react";

interface AutoDialogProps {
  title?: string;
  children: React.ReactNode;
  delay?: number; // optional ms to wait AFTER DOMContentLoaded before showing
  openOnDOMContentLoaded?: boolean; // whether to open on DOMContentLoaded
}

const AutoDialog: React.FC<AutoDialogProps> = ({
  title,
  children,
  delay = 0,
  openOnDOMContentLoaded = true,
}) => {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // mark client so we don't render dialog server-side (Next/Vite SSR safety)
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !openOnDOMContentLoaded) return;

    const tryOpen = () => {
      if (delay > 0) {
        const t = window.setTimeout(() => setOpen(true), delay);
        return () => clearTimeout(t);
      } else {
        setOpen(true);
        return;
      }
    };

    // If DOMContentLoaded already fired, open immediately (or after delay)
    if (typeof document !== "undefined") {
      if (document.readyState === "complete" || document.readyState === "interactive") {
        tryOpen();
        return;
      }

      // otherwise wait for DOMContentLoaded
      const onLoaded = () => tryOpen();
      document.addEventListener("DOMContentLoaded", onLoaded, { once: true });

      return () => document.removeEventListener("DOMContentLoaded", onLoaded);
    }
  }, [isClient, delay, openOnDOMContentLoaded]);

  if (!isClient) return null;

  return (
    <Dialog.Root 
      open={open} 
      onOpenChange={(val) => setOpen(Boolean(val))} 
      placement="center"
    >
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content 
          borderRadius="lg" 
          boxShadow="lg" 
          p={4} 
          bg={{ base: "#F0F9FF", _dark: "#000D14" }} 
          maxW="xl"
        >
          <Dialog.CloseTrigger />
          {title && (
            <Dialog.Header>
              <Dialog.Title 
                textAlign="center" 
                fontSize="1.5rem" 
                fontWeight="800" 
                color={{ base: "#036096", _dark: "#69C6FC" }}
              >
                {title}
              </Dialog.Title>
            </Dialog.Header>
          )}

          <Dialog.Body textAlign="center" py={4}>
            {children}
          </Dialog.Body>

          <Dialog.Footer>
            <Button 
              onClick={() => setOpen(false)}
              bg={{ base: "#036096", _dark: "#69C6FC" }}
              fontWeight="bold"
            >
              Close
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};

export default AutoDialog;
