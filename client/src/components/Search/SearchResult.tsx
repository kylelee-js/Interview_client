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
            {/* <Card variant="outlined">
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
                    sx={{
                      position: "relative",
                      fontSize: "12px",
                      marginTop: 2,
                      marginBottom: 0,
                    }}
                    color="text.secondary"
                  >
                    <span
                      style={{
                        color:
                          new Date() > new Date(interviewDate)
                            ? "red"
                            : "inherit",
                      }}
                    >
                      면접예정일 :{" "}
                      {new Date(interviewDate)?.toLocaleString("ko-KR", {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </span>
                    {new Date().getDate() ==
                      new Date(interviewDate).getDate() &&
                      new Date().getMonth() ==
                        new Date(interviewDate).getMonth() && (
                        <PersonPinCircleIcon
                          style={{
                            position: "absolute",
                            top: "-3px",
                            right: "0px",
                          }}
                          fontSize="small"
                        />
                      )}
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
            </Card> */}
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
