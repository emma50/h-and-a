// components/PopupDialog.tsx
import React, { useEffect, useState } from "react";
import { Dialog, Button, Box, Text, Heading } from "@chakra-ui/react";
import { CloseButton } from "@/components/ui/close-button";

interface PopupDialogProps {
  title?: string;
  description?: string;
  buttonText?: string;
  scrollTargetId?: string; // the id of the section to scroll to
}

const PopupDialog: React.FC<PopupDialogProps> = ({
  title = "🚀 Hey Techstars Our 2026 Cohort is Here!!",
  description = "Check out our free courses to gain practical, in-demand tech skills with expert guidance.",
  buttonText = "Learn More",
  scrollTargetId = "courses",
}) => {
  const [open, setOpen] = useState(false);

  // Open dialog when landing page loads
  useEffect(() => {
    const handleDOMContentLoaded = () => {
      setOpen(true);
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
    } else {
      setOpen(true);
    }

    return () => {
      document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
    };
  }, []);

  const handleRegisterClick = () => {
    setOpen(false);
    setTimeout(() => {
      const target = document.getElementById(scrollTargetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <Dialog.Root open={open}>
      <Dialog.Backdrop onClick={() => setOpen(false)} />
      <Dialog.Positioner>
        <Dialog.Content
          borderRadius="xl"
          boxShadow="lg"
          bg={{ base: "#F0F9FF", _dark: "#000D14" }} 
          p={6}
          maxW="xl"
          // minH="xl"
          // maxH="2xl"
          position="relative"
        >
          {/* <Dialog.CloseTrigger /> */}
          <CloseButton
            size="sm"
            position="absolute"
            top="2"
            right="1"
            onClick={() => setOpen(false)}
            aria-label="Close dialog"
            height="1rem"
            width="0"
            border="none"
            outline="none"
          />
          <Box textAlign="center">
            <Heading 
              // size="md"
              mt={2} 
              mb={4}
              fontSize="1.5rem" 
              fontWeight="800" 
              color={{ base: "#036096", _dark: "#69C6FC" }}
            >
              {title}
            </Heading>
            <Text mb={4} color={{base: "#000000", _dark: "#ffffff"}}>{description}</Text>
            <Button 
              bg={{ base: "#036096", _dark: "#69C6FC" }}
              fontWeight="bold"
              onClick={handleRegisterClick}
            >
              {buttonText}
            </Button>
          </Box>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};

export default PopupDialog;
