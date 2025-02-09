import styled from "styled-components";

const StyledInput = styled.input`
  padding: 8px;
  margin: 5px;
  border: 2px solid #45a049;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #357837;
  }
`;

const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

interface Input {
  type?: string;
  label: string;
  value: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Input = ({ type, label, value, onChange }: Input) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StyledLabel>{label}</StyledLabel>
      <StyledInput type={type} value={value} onChange={onChange} />
    </div>
  );
};
