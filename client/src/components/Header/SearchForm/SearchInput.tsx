import { Box, FormControl, NativeSelect, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SearchIconButton from "./SearchIconButton";
import { onFetchAutoCompleteData } from "../../../api/searchApi";

const SearchFormWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const AutoCompleteBox = styled.div`
  border: 1px solid black;
  position: absolute;
  width: 60%;
  top: 30px;
  left: 73px;
  padding: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;
const SearchResultsUList = styled.li`
  margin: 0;
  padding: 0;
`;
const SearchResults = styled.p<{ none: boolean }>`
  cursor: ${(props) => (props.none ? "auto" : "pointer")};
  color: black;
  margin: 5px 0px;
  padding-right: 5px;
  border-bottom: 1px solid black;

  &.selected {
    color: white;
    background-color: blue;
  }
`;

export default function SearchInput() {
  const [dateSearch, setDateSearch] = useState<boolean>(false);
  const [autoComplete, setAutoComplete] = useState<string[]>([]);
  const [fromDate, setfromDate] = useState<Date | null>(new Date());
  const [toDate, setToDate] = useState<Date | null>(new Date());
  const [showAutocomplete, setShowAutocomplete] = useState<boolean>(false);
  const [seletecSearch, setSelectedSearch] = useState<number>(-1);
  const [isComposing, setIsComposing] = useState(false);

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleAutoComplete = async (e: ChangeEvent<HTMLInputElement>) => {
    setShowAutocomplete(true);
    if (e.currentTarget.value == "") {
      setAutoComplete([]);
      setShowAutocomplete(false);
      return;
    }
    const result: string[] = await onFetchAutoCompleteData(
      e.currentTarget.value
    );
    setAutoComplete(result);
  };
  const handleFromChange = (newValue: Date | null) => {
    setfromDate(newValue);
  };
  const handleToChange = (newValue: Date | null) => {
    setToDate(newValue);
  };
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.currentTarget.value == "date") {
      setDateSearch(true);
    } else {
      setDateSearch(false);
    }
  };
  const onBlur = () => {
    // FIXME: 이벤트 순서 제어를 setTimeout으로 하고 있다.
    setTimeout(() => {
      setShowAutocomplete(false);
    }, 100);
  };
  const onFocus = () => {
    setShowAutocomplete(true);
  };
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (!dateSearch) {
      navigate(
        `./search/?option=${data.option}&searchKeyword=${data.searchKeyword}`
      );
    } else {
      navigate(
        `./search/?option=${data.option}&searchKeyword=${new Date(
          fromDate!
        ).toISOString()}~${new Date(toDate!).toISOString()}`
      );
    }
  };

  const onKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // TODO: 어떻게 배열을 순회할 것인가?
    if (isComposing) return;
    if (event.key === "ArrowDown" && autoComplete.length - 1 > seletecSearch) {
      setSelectedSearch((prev) => prev + 1);
      console.log(seletecSearch);
    } else if (event.key === "ArrowUp" && seletecSearch > -1) {
      setSelectedSearch((prev) => prev - 1);
      console.log(seletecSearch);
    } else if (event.key === "Enter") {
      // TODO: submit이 네비게이션보다 먼저 일어나고 있다...
      navigate(
        `./search/?option=applicant&searchKeyword=${autoComplete[seletecSearch]}`
      );
      setSelectedSearch(-1);
      setShowAutocomplete(false);
      console.log(seletecSearch);
    }
  };
  const onSearchClick = (event: React.MouseEvent<HTMLParagraphElement>) => {
    // FIXME: option값을 하드코딩해서 주고 있다.
    console.log("search click");
    navigate(
      `./search/?option=applicant&searchKeyword=${event.currentTarget.innerText}`
    );
  };

  return (
    <SearchFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ marginRight: "10px" }}>
        <FormControl>
          <NativeSelect
            id="demo-simple-select"
            sx={{ fontSize: "15px", textAlign: "center", color: "black" }}
            disableUnderline
            defaultValue={"applicant"}
            {...register("option", {
              onChange: onChange,
            })}
          >
            <option value={"applicant"}>지원자</option>
            <option value={"tag"}>태그</option>
            <option value={"date"}>면접일</option>
          </NativeSelect>
        </FormControl>
      </Box>

      {dateSearch ? (
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DateTimePicker
            value={fromDate}
            onChange={handleFromChange}
            // maxDateTime={toDate ? toDate : undefined}
            renderInput={(params) => {
              const inputprops = { ...params.inputProps };
              return (
                <TextField
                  {...params}
                  style={{
                    backgroundColor: "white",
                    marginRight: "20px",
                    borderRadius: "5px",
                    fontSize: "12px",
                  }}
                  inputProps={{
                    ...inputprops,
                    style: {
                      height: "5px",
                      fontSize: "14px",
                    },
                  }}
                />
              );
            }}
          />
          <DateTimePicker
            value={toDate}
            onChange={handleToChange}
            // minDateTime={fromDate ? fromDate : undefined}
            renderInput={(params) => {
              const inputprops = { ...params.inputProps };
              return (
                <TextField
                  autoComplete="off"
                  style={{
                    backgroundColor: "white",
                    marginRight: "20px",
                    borderRadius: "5px",
                    fontSize: "12px",
                  }}
                  {...params}
                  inputProps={{
                    ...inputprops,
                    style: {
                      paddingRight: "20px",
                      height: "5px",
                      fontSize: "14px",
                    },
                  }}
                />
              );
            }}
          />
        </LocalizationProvider>
      ) : (
        <TextField
          {...register("searchKeyword", { onChange: handleAutoComplete })}
          required
          autoComplete="off"
          style={{
            backgroundColor: "white",
            marginRight: "20px",
            borderRadius: "5px",
          }}
          InputProps={{ sx: { height: 30 } }}
          placeholder="검색"
          size="small"
          onBlur={onBlur}
          onFocus={onFocus}
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)}
          onKeyDown={onKeydown}
        />
      )}
      {showAutocomplete && (
        <AutoCompleteBox>
          {/* TODO: 키보드 마우스 인풋 받기 */}
          <SearchResultsUList>
            {autoComplete.length == 0 ? (
              <SearchResults none={true}>검색결과가 없습니다.</SearchResults>
            ) : (
              autoComplete.map((result, index) => (
                <SearchResults
                  key={index}
                  none={false}
                  onClick={onSearchClick}
                  className={seletecSearch === index ? "selected" : ""}
                >
                  {result}
                </SearchResults>
              ))
            )}
          </SearchResultsUList>
        </AutoCompleteBox>
      )}

      <SearchIconButton isDate={dateSearch} />
    </SearchFormWrapper>
  );
}
