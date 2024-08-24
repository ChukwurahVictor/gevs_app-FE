"use client";

import React from "react";
import CandidatesSummary from "./components/summary";
import DataTable, { TableColumn } from "react-data-table-component";
import { UseFetchCandidates } from "@/services/queries/candidates";
import { customStyles } from "@/utils/custom-table-styles";
import { Box } from "@chakra-ui/react";
import CustomSpinner from "@/components/custom-spinner";

const Candidates = () => {
  const { data: candidates, isLoading, isSuccess } = UseFetchCandidates();

  const columns: TableColumn<any>[] = [
    {
      name: "S/N",
      maxWidth: '5rem',
      selector: (row, index) => index! + 1,
    },
    {
      name: "Candidate Name",
      selector: row => row?.name,
    },
    {
      name: "Constituency",
      selector: row => row?.constituency.name,
    },
    {
      name: "Party",
      selector: row => row?.party.name,
    },
  ];
  return (
    <>
      <CandidatesSummary />
      <Box p={"2.5rem"} mt="3rem" mb={"3rem"} bg="brand.white" borderRadius={"1rem"}>
        <Box mt="2rem">
          {isSuccess &&
            <DataTable
              columns={columns}
              data={candidates?.data}
              pagination={false}
              customStyles={customStyles}
              progressPending={isLoading}
              progressComponent={<CustomSpinner />}
              paginationServer
            />
          }
        </Box>
      </Box>
    </>
  );
};

export default Candidates;
