import { Box, FormControl, NativeSelect, TextField } from "@mui/material";
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
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    navigate(
      `./search/?option=${data.option}&searchKeyword=${data.searchKeyword}`
    );
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
            {...register("option")}
          >
            <option value={"applicant"}>지원자</option>
            <option value={"tag"}>태그</option>
          </NativeSelect>
        </FormControl>
      </Box>
      <TextField
        {...register("searchKeyword")}
        required
        style={{
          backgroundColor: "white",
          marginRight: "20px",
          // border: "1px solid whitesmoke",
          borderRadius: "5px",
        }}
        InputProps={{ sx: { height: 30 } }}
        // helperText="검색조건을 확인하세요"
        placeholder="검색"
        size="small"
        // type="search"
      />
      <SearchIconButton />
    </SearchFormWrapper>
  );
}
