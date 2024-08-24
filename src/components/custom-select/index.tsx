import {
  SystemStyleObject,
  Flex,
  FlexProps,
  Text,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { OptionBase, Select } from "chakra-react-select";
import themes from "@/utils/themes";
import { SelectorOptionValue } from "@/types/index";
interface PropType {
  register?: any;
  options?: Array<OptionBase & SelectorOptionValue>;
  onChange?: (data: SelectorOptionValue) => void;
  placeholder?: string;
  name?: string;
  containerStyles?: FlexProps;
  selectorStyles?: SystemStyleObject;
  inputStyles?: SystemStyleObject;
  optionStyles?: SystemStyleObject;
  isDisabled?: boolean;
  label?: string;
  isHiddenChevron?: boolean;
  closeOnSelect?: boolean;
  error?: string;
  h?: string | { [key: string]: string | number };
  w?: string | { [key: string]: string | number };
  closeMenuOnSelect?: boolean;
  value?: SelectorOptionValue;
  defaultValue?: { label: string; value: string }[];
  isRequired?: boolean;
}

const CustomSelect = ({
  register,
  options,
  onChange,
  placeholder,
  name,
  isDisabled,
  isHiddenChevron,
  label,
  value,
  h,
  w,
  containerStyles,
  selectorStyles,
  optionStyles,
  closeOnSelect = true,
  inputStyles,
  error,
  defaultValue,
  isRequired,
}: PropType) => {
  return (
    <Flex w={w} flexDirection="column" {...containerStyles} size="xs">
      {!!label && (
        <FormControl display="flex" isRequired={isRequired && isRequired}>
          <FormLabel
            fontSize={themes.fontSizes.paragraph}
            fontWeight={themes.fontWeights.semiBold}
            color="typography.gray"
          >
            {label}
          </FormLabel>
        </FormControl>
      )}
      <Select
        instanceId={"react-select"}
        {...register}
        id="filter"
        name={name}
        isDisabled={isDisabled}
        options={options || []}
        value={value}
        placeholder={placeholder}
        closeMenuOnSelect={closeOnSelect}
        defaultValue={defaultValue}
        chakraStyles={{
          dropdownIndicator: (provided, _) => ({
            ...provided,
            bg: "transparent",
            px: 2,
            cursor: "inherit",
            size: "md",
          }),
          indicatorSeparator: provided => ({
            ...provided,
            display: "none",
          }),
          option: (provided, state) => ({
            ...provided,
            background: state.isFocused ? "#F5F5F5" : "#ffffff",
            color: "#525252",
            fontSize: themes.fontSizes.label,
            ...optionStyles,
          }),
          container: provided => ({
            ...provided,
            height: h ? h : "4rem",
          }),
          control: provided => ({
            ...provided,
            border: "1px solid #757575",
            borderRadius: ".8rem",
            paddingLeft: "1rem",
            height: "100%",
            width: "100%",
            fontSize: themes.fontSizes.label,
            ...selectorStyles,
          }),
          downChevron: provided => ({
            ...provided,
            display: isHiddenChevron ? "none" : "box",
            color: "#A0A0A0",
          }),
          input: provided => ({
            ...provided,
            color: "#A0A0A0",
            ...inputStyles,
            fontSize: themes.fontSizes.label,
          }),
          singleValue: provided => ({
            ...provided,
            overflow: "visible",
          }),
          menu: provided => ({
            ...provided,
            overflow: "visible",
          }),
          menuList: provided => ({
            ...provided,
            height: "100%",
            width: "100%",
            minWidth: "unset",
            fontSize: themes.fontSizes.label,
          }),

          valueContainer: provided => ({
            ...provided,
            padding: 0,
            overflow: "hidden",
            whiteSpace: "nowrap",
          }),
        }}
        onChange={onChange}
      />

      {error && (
        <Text mt={"0.5rem"} fontSize={"1rem"} color="red">
          {error}
        </Text>
      )}
    </Flex>
  );
};

export default CustomSelect;
