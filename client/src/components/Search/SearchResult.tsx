import {
  Box,
  Card,
  CardActions,
  CardContent,
  Tooltip,
  Typography,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import BlockIcon from "@mui/icons-material/Block";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useAppDispatch, useAppSelector } from "../../store";
import { BoardGrid, MenuButtonDiv, TagNote } from "../../styles/boardStyle";
import KebabMenu from "../KanBanBoard/KebabMenu";
import { useLocation } from "react-router-dom";
import { fetchSearchData } from "./searchSlice";
import { SearchDataType } from "../../api/searchApi";
import { useEffect, useState } from "react";
import styled from "styled-components";

export const BoardWrapper = styled.div`
  padding: 5px 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  min-height: 80vh;
  width: 100%;
  background-color: #d9dedb;
  border-radius: 3px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const myPageBoards = ["미등록", "서류합격", "1차합격", "2차합격", "최종합격"];

const HighlightSpan = styled.span<{ match: boolean }>`
  background-color: ${(props) => (props.match ? "yellow" : "transparent")};
`;

export default function Search() {
  const userPk = useAppSelector((state) => state.auth.user?.pk);
  const searchSlice = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  const search = useLocation().search;
  const [keyword, setKeyword] = useState<string>("");
  const [opt, setOpt] = useState<string>("");

  useEffect(() => {
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
        const {
          status,
          department,
          job,
          interviewer,
          applicantName,
          isFailed,
          isFixed,
          tags,
          id,
          interviewDate = null,
        } = result;
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
            <Card variant="outlined">
              <CardContent>
                <Typography
                  sx={{
                    fontSize: 14,
                    borderRadius: "3px",
                  }}
                  color="text.secondary"
                  gutterBottom
                >
                  <HighlightSpan match={department.indexOf(keyword) > -1}>
                    {department}
                  </HighlightSpan>
                  -{" "}
                  <HighlightSpan match={job.indexOf(keyword) > -1}>
                    {job}
                  </HighlightSpan>
                </Typography>
                <Typography variant="h5" component="div">
                  <HighlightSpan match={applicantName.indexOf(keyword) > -1}>
                    {applicantName}
                  </HighlightSpan>{" "}
                  {isFailed && (
                    <Tooltip title="해당 지원자는 전형 탈락상태입니다.">
                      <BlockIcon
                        color="error"
                        sx={{ verticalAlign: "text-top" }}
                      />
                    </Tooltip>
                  )}{" "}
                  {isFixed && (
                    <Tooltip title="해당 지원자는 검토 중입니다.">
                      <LockIcon sx={{ verticalAlign: "text-top" }} />
                    </Tooltip>
                  )}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {myPageBoards[+status]}
                </Typography>
                <Typography variant="body2">
                  {tags?.map((tag) => (
                    <TagNote key={tag.id} id={"" + tag.id}>
                      <HighlightSpan
                        style={{
                          color:
                            tag.tagText.indexOf(keyword) > -1
                              ? "black"
                              : "inherit",
                        }}
                        match={tag.tagText.indexOf(keyword) > -1}
                      >
                        #{tag.tagText}
                      </HighlightSpan>
                    </TagNote>
                  ))}
                </Typography>
                {interviewDate && (
                  <Typography
                    sx={{ fontSize: "12px", marginTop: 2, marginBottom: 0 }}
                    color="text.secondary"
                  >
                    면접예정일 :{" "}
                    {new Date(+interviewDate)?.toLocaleString("ko-KR", {
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </Typography>
                )}
              </CardContent>
              <MenuButtonDiv>
                <CardActions>
                  <KebabMenu
                    type={"myapplicants"}
                    id={id}
                    status={status}
                    isMine={Boolean(
                      interviewer?.find(
                        (interviewer) => interviewer.pk === userPk!
                      )
                    )}
                    applicantIndex={index}
                    isFailed={isFailed}
                    isFixed={isFixed}
                    tags={tags}
                  />
                </CardActions>
              </MenuButtonDiv>
            </Card>
          </Box>
        );
      })}
    </BoardGrid>
  );
}
