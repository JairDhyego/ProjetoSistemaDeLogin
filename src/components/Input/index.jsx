import * as C from "./styles";

export const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <C.Input
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
