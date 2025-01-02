import { TextInput } from "flowbite-react";
import React from "react";

interface TextInputProps {
  id: string;
  type?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  error?: boolean;
  className?: string;
  helperText?: string;
}

const InputCustom: React.FC<TextInputProps> = ({
  id,
  type = "text",
  value,
  onChange,
  placeholder = "",
  error,
  className = "",
  helperText,
}) => {
  return (
    <div className="mb-4">
      <TextInput
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`block w-full rounded-lg border focus:outline-none focus:ring-2 
          ${error ? "border-red-500 focus:ring-red-500" : "border-cyan-500 focus:ring-cyan-500"} 
          ${className}`}
      />
      {error && helperText && (
        <p className="mt-2 text-sm text-red-500">{helperText}</p>
      )}
    </div>
  );
};

export default InputCustom;
