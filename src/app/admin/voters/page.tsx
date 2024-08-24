"use client";

import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import VotersSummary from "./components/summary";
import { UseFetchVoters } from "@/services/queries/voters";
import { customStyles } from "@/utils/custom-table-styles";
import { Box } from "@chakra-ui/react";
import CustomSpinner from "@/components/custom-spinner";

const Voters = () => {
  const { data: voters, isLoading, isSuccess } = UseFetchVoters();

  const columns: TableColumn<any>[] = [
    {
      name: "S/N",
      maxWidth: "5rem",
      selector: (row, index) => index! + 1,
    },
    {
      name: "Voter Name",
      selector: row => row?.firstName + " " + row?.lastName,
    },
    {
      name: "Constituency",
      selector: row => row?.constituency?.name,
    },
    {
      name: "Email",
      selector: row => row?.email,
    },
    {
      name: "UVC Code",
      selector: row => row?.uvcCode,
    },
  ];
  return (
    <>
      <VotersSummary />
      {isLoading && <CustomSpinner />}
      <Box
        p={"2.5rem"}
        mt="3rem"
        mb={"3rem"}
        bg="brand.white"
        borderRadius={"1rem"}
      >
        <Box mt="2rem">
          {isSuccess && (
            <DataTable
              columns={columns}
              data={voters}
              pagination={false}
              customStyles={customStyles}
              paginationServer
            />
          )}
        </Box>
      </Box>
    </>
  );
};

export default Voters;
