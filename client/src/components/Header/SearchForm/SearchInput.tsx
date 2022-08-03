import { Box, FormControl, NativeSelect, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { ChangeEvent, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SearchIconButton from "./SearchIconButton";

const SearchFormWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export default function SearchInput() {
  const [dateSearch, setDateSearch] = useState<boolean>(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [fromDate, setfromDate] = useState<Date | null>(new Date());
  const [toDate, setToDate] = useState<Date | null>(new Date());

  console.log(fromDate, toDate);
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
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (!dateSearch) {
      navigate(
        `./search/?option=${data.option}&searchKeyword=${data.searchKeyword}`
      );
    } else {
      navigate(
        `./search/?option=${data.option}&searchKeyword=${new Date(
          fromDate!
        ).getTime()}~${new Date(toDate!).getTime()}`
      );
    }
  };
  return (
    <SearchFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ marginRight: "10px" }}>
        <FormControl>
          <NativeSelect
            id="demo-simple-select"
            // value={option}
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
          {...register("searchKeyword")}
          required
          style={{
            backgroundColor: "white",
            marginRight: "20px",
            borderRadius: "5px",
          }}
          InputProps={{ sx: { height: 30 } }}
          placeholder="검색"
          size="small"
        />
      )}

      <SearchIconButton isDate={dateSearch} />
    </SearchFormWrapper>
  );
}
