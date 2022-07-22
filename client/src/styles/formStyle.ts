import styled from "styled-components";

export const FormWrapper = styled.section`
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  gap: 15px;
  flex-direction: column;
  position: relative;
`;

// TODO: 스타일 수정하기
export const Input = styled.input`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 11px 13px;
  background: #f9f9fa;
  color: #f03d4e;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  box-sizing: border-box;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const Eye = styled.i`
  color: #f03d4e;
  position: absolute;
  top: 20%;
  right: -7%;
  :hover {
    color: #00fcb6;
    cursor: pointer;
  }
`;

export const PassWrapper = styled.span`
  position: relative;
  display: flex;
`;

export const Button = styled.button`
  margin: 0 auto;
  max-width: 414px;
  width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #fa922a;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  /* margin-top: 0.2rem; */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: #b56d24;
  }
`;

export const Select = styled.select`
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  /* min-width: 414px; */
  padding: 11px 13px;
  padding-right: 30px;
  background: #f9f9fa;
  color: grey;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 1;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
`;

export const SubmitButton = styled.input`
  margin: 0 auto;
  max-width: 100%;
  width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #f03d4e;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: rgb(200, 50, 70);
  }
`;

export const ValidationMessage = styled.p`
  background-color: grey;
  color: white;
`;
