import { Box, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store";
import { BoardGrid } from "../../styles/boardStyle";
import { useLocation } from "react-router-dom";
import { fetchSearchData } from "./searchSlice";
import { SearchDataType } from "../../api/searchApi";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { onSetPage } from "../KanBanBoard/pageTypeSlice";
import CardTemplate from "../../styles/CardTemplate";

export const BoardWrapper = styled.div`
  padding: 5px 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  min-height: 80vh;
  width: 100%;
  background-color: #d9dedb;
  border-radius: 3px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export default function Search() {
  const userPk = useAppSelector((state) => state.auth.user?.pk);
  const searchSlice = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  const search = useLocation().search;
  const [keyword, setKeyword] = useState<string>("");
  const [opt, setOpt] = useState<string>("");

  useEffect(() => {
    dispatch(onSetPage("search"));
    const option = new URLSearchParams(search).get("option");
    const searchKeyword = new URLSearchParams(search).get("searchKeyword");
    setKeyword(searchKeyword!);
    setOpt(option!);
    const data: SearchDataType = {
      option: option!,
      searchKeyword: searchKeyword!,
    };
    dispatch(fetchSearchData(data));
  }, [search]);

  if (searchSlice.length == 0) {
    return (
      <BoardWrapper>
        <Typography sx={{ marginTop: "30px" }} variant="h5" component="div">
          일치하는 검색 결과가 없습니다.
        </Typography>
      </BoardWrapper>
    );
  }
  return (
    <BoardGrid boardLength={4}>
      {searchSlice.map((result, index) => {
        const { id } = result;
        return (
          <Box
            key={id}
            sx={{
              minWidth: 250,
              width: "90%",
              marginTop: "10px",
              maxWidth: 320,
              position: "relative",
              boxSizing: "border-box",
            }}
          >
            <CardTemplate
              {...result}
              type={"search"}
              userPk={userPk}
              keyword={keyword}
              applicantIndex={index}
              boardStatus={"0"}
            />
          </Box>
        );
      })}
    </BoardGrid>
  );
}
