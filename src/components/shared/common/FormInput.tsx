import React from "react";

type TFormInput = {
  isListing: boolean;
  name: string;
  placeholder?: string;
  setValue: (name: string, value: string) => void;
  type: string;
  value: string;
};

export default function FormInput({
  name,
  type = "text",
  value,
  setValue,
  placeholder,
  isListing = false,
}: TFormInput) {
  return (
    <input
      type={type}
      value={value}
      name={name}
      onChange={(e) =>
        isListing
          ? setValue(name, e?.target?.value)
          : setValue(name, e?.target?.value)
      }
      placeholder={placeholder}
      className="border border-gray-300 px-2 py-4 rounded-md w-full"
    />
  );
}
