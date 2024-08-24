import { Box, Flex, GridItem, Icon, Spacer } from "@chakra-ui/react";
import { Text } from "../app-text";
import CandidatesIcon from "@/assets/icons/candidatesIcon";
import ConstituencyIcon from "@/assets/icons/constituencyIcon";
import PartyIcon from "@/assets/icons/partyIcon";

interface GridItemProps {
  label: string;
  providerStat: number;
  iconType?:
    | "candidates-icon"
    | "constituency-icon"
    | "party-icon";
}

const iconMap = {
  "candidates-icon": CandidatesIcon,
  "constituency-icon": ConstituencyIcon,
  "party-icon": PartyIcon,
  default: CandidatesIcon,
};

const DashboardStats = ({
  label,
  providerStat,
  iconType,
}: GridItemProps) => {
    const IconComponent = iconMap[iconType || "default"];
  const iconSize = 8;

  return (
    <GridItem
      bg={"brand.white"}
      borderRadius={"1rem"}
      p={"2rem"}
      w={{ base: "100%", md: "24%" }}
    >
      <Flex align="center" h="12.5rem">
        <Box w="100%">
          <Flex align="center" justify={"space-between"}>
            <Text
              variant="heading1"
              fontWeight="semiBold"
              mb={"-1rem"}
              color={"#474747"}
            >
              {providerStat}
            </Text>
            <Spacer />
            <Icon as={IconComponent} boxSize={iconSize} />
          </Flex>
          <Text variant="heading6" fontWeight="medium" color="#9C0D38">
            {label}
          </Text>
        </Box>
      </Flex>
    </GridItem>
  );
};

export default DashboardStats;
