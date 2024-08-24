"use client";

import React, { CSSProperties, useState } from "react";
import {
  FormLabel,
  FormControl,
  Input,
  FormHelperText,
  ResponsiveValue,
  FlexProps,
  Textarea,
  InputProps,
  InputGroup,
  InputRightElement,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import themes from "@/utils/themes";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FaQrcode } from "react-icons/fa";
import QRCodeScanner from "@/utils/qr-code-scanner";

type AppInputProps = {
  label?: string;
  errorMessage?: string;
  isRequired?: boolean;
  type?: React.HTMLInputTypeAttribute;
  id?: string;
  textInputStyle?: CSSProperties;
  placeholder?: string;
  isTextArea?: boolean;
  isPhone?: boolean;
  control?: any;
  placeholderStyle?: CSSProperties;
  register?: any;
  defaultValue?: any;
  isDate?: boolean;
  minDate?: string | Date;
  maxDate?: string | Date;
  variant?: ResponsiveValue<
    (string & {}) | "outline" | "filled" | "flushed" | "unstyled"
  >;
  forgotPasswordLink?: React.ReactNode;
} & FlexProps &
  InputProps;

export const generalStyle = {
  height: "4.1rem",
  backgroundColor: "#FCFCFC",
  border: "0.4px solid rgba(15, 99, 255, 0.08)",
  borderRadius: "4px",
  color: "#000",
  fontSize: themes.fontSizes.label,
  fontWeight: themes.fontWeights.regular,
};

const AppInput = React.forwardRef<HTMLInputElement, AppInputProps>(
  (
    {
      label,
      errorMessage,
      isRequired,
      type,
      placeholder,
      variant,
      control,
      defaultValue,
      id,
      h,
      textInputStyle,
      w,
      placeholderStyle,
      onChange,
      isPhone,
      isTextArea,
      register,
      forgotPasswordLink,
      isDate,
      minDate,
      maxDate,
      ...rest
    },
    ref
  ) => {
    const [show, setShow] = useState<boolean>(false);
    const [scannedValue, setScannedValue] = useState();
    const handleClick = () => setShow(!show);
    const [showModal, setShowModal] = useState(false);

    const handleScanIconClick = () => {
      setShowModal(true);
    };

    const handleCloseModal = () => {
      setShowModal(false);
    };

    return (
      <FormControl isRequired={isRequired && isRequired}>
        {label && type !== "password" ? (
          <FormLabel
            htmlFor={id}
            fontSize={themes.fontSizes.paragraph}
            fontWeight={themes.fontWeights.semiBold}
            color="typography.gray"
          >
            {label}
          </FormLabel>
        ) : label && type === "password" ? (
          <FormLabel
            htmlFor={id}
            fontSize={themes.fontSizes.paragraph}
            fontWeight={themes.fontWeights.bold}
            color="typography.gray"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderRadius={"4rem"}
          >
            <div>{label}</div>
          </FormLabel>
        ) : null}
        {isTextArea ? (
          <Textarea
            style={{
              ...generalStyle,
              height: `${h ? h : generalStyle.height}`,
              width: `${w && w}`,
              ...textInputStyle,
            }}
            id={id}
            {...register}
            placeholder={placeholder}
            defaultValue={defaultValue}
            _placeholder={placeholderStyle}
            onChange={onChange}
          />
        ) : isDate ? (
          <Input
            style={{
              ...generalStyle,
              height: `${h ? h : generalStyle.height}`,
              width: `${w && w}`,
              borderRadius: "4rem",
              border: "1px solid #9C0D38",
              ...textInputStyle,
            }}
            size="lg"
            type="date"
            max={maxDate}
            {...register}
            defaultValue={defaultValue}
            placeholder={placeholder}
            onChange={onChange}
          />
        ) : (
          <InputGroup size="md">
            <Input
              fontSize={"1.5rem"}
              height={"4.1rem"}
              borderRadius={"4rem"}
              border={"1px solid #9C0D38"}
              fontWeight="500"
              _placeholder={{
                fontSize: "1.4rem",
                color: "grey",
              }}
              variant={variant}
              placeholder={placeholder}
              type={type !== "password" ? "text" : show ? "text" : "password"}
              {...rest}
              ref={ref}
              value={scannedValue ? scannedValue : null}
              {...register}
            />
            {type === "password" && (
              <InputRightElement width="4.5rem" mt=".7rem">
                <IconButton
                  aria-label={show ? "Hide password" : "Show password"}
                  icon={show ? <ViewOffIcon /> : <ViewIcon />}
                  onClick={handleClick}
                  bg="transparent"
                  fontSize="15px"
                  _placeholder={{
                    fontSize: "1.4rem",
                    color: "grey",
                  }}
                />
              </InputRightElement>
            )}
            {type === "qr-code" && (
              <>
                <InputRightElement width="4.5rem" mt=".7rem">
                  <IconButton
                    aria-label={showModal ? "Hide scanner" : "Show scanner"}
                    icon={<FaQrcode />}
                    onClick={handleScanIconClick}
                    bg="transparent"
                    fontSize="15px"
                    _placeholder={{
                      fontSize: "1.4rem",
                      color: "grey",
                    }}
                  />
                </InputRightElement>
                <Modal isOpen={showModal} onClose={handleCloseModal} size="md">
                  <ModalOverlay />
                  <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                      <QRCodeScanner
                        setScannedValue={setScannedValue}
                        setShowModal={setShowModal}
                      />
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </>
            )}
          </InputGroup>
        )}
        {errorMessage && (
          <FormHelperText fontSize="1rem" color="red">
            {errorMessage}
          </FormHelperText>
        )}
      </FormControl>
    );
  }
);

AppInput.displayName = "AppInput";
export default AppInput;
