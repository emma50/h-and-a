// components/PopupDialog.tsx
import React, { useEffect, useState } from "react";
import { Dialog, Button, Box, Text, Heading } from "@chakra-ui/react";

interface PopupDialogProps {
  title?: string;
  description?: string;
  buttonText?: string;
  scrollTargetId?: string; // the id of the section to scroll to
}

const PopupDialog: React.FC<PopupDialogProps> = ({
  title = "🚀 Don't Miss Out! Free Tech Masterclass",
  description = "This Saturday, October 25th at 11 AM. Limited spots available.",
  buttonText = "Register Now & Secure My Place",
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
    const target = document.getElementById(scrollTargetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Dialog.Root open={open}>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content
          borderRadius="xl"
          boxShadow="lg"
          bg={{ base: "#F0F9FF", _dark: "#000D14" }} 
          p={6}
          maxW="xl"
        >
          <Dialog.CloseTrigger />
          <Box textAlign="center">
            <Heading 
              // size="md" 
              mb={2}
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
