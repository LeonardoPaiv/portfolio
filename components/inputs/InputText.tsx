import React from "react";

const InputText = ({
  id,
  value,
  setValue,
  label,
  type
}: {
  label: string;
  id: string;
  value: string;
  setValue: (n: string) => void;
  type: string;
}) => {
  return (
    <>
      <label className="block" htmlFor={id}>
        {label}
      </label>
      <input
        className="w-full text-black p-1"
        id={id}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export default InputText;
