import React from "react";
import Image from "next/image";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Box,
  Flex,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Text } from "@/components/app-text";
import AppButton from "@/components/app-button";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  body?: string;
  confirm?: string;
  decline?: string;
}

const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  body,
  confirm,
  decline,
}: ConfirmationModalProps) => {
  return (
    <Modal size={"2xl"} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent py="4rem" px="3rem">
        {/* <Flex align={"center"} justify={"center"}>
          <Image src={Icon} alt="icon" width={100} height={100} />
        </Flex> */}

        <ModalCloseButton />
        <ModalBody>
          <Box mt="3rem" mb="2rem" lineHeight={1.8}>
            <Text
              variant="heading5"
              textAlign={"center"}
              color={"typography.wine"}
              fontWeight={"medium"}
            >
              {body ?? "Are you sure?"}
            </Text>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Flex
            gap="1rem"
            align={"center"}
            justify={"center"}
            direction={"column"}
            w="100%"
          >
            <AppButton
              px="2.5rem"
              py="2rem"
              color={"white"}
              bg={"typography.wine"}
              fontSize="paragragh"
              w="100%"
              _hover={{
                bg: "#EB6969",
              }}
              variant="primary"
              onClick={onConfirm}
            >
              {confirm ?? "Yes"}
            </AppButton>
            <AppButton
              px="2.5rem"
              py="2rem"
              bg={"#FFF9F6"}
              color={"#EB6969"}
              variant="secondary"
              w="100%"
              fontSize="paragraph"
              mr={3}
              onClick={onClose}
            >
              {decline ?? "No"}
            </AppButton>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmationModal;
