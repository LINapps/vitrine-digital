import React from "react";

type InputLink = {
  kind: number;
  value: string;
  onChangeKind: (event: React.ChangeEvent<HTMLSelectElement>) => void,
  onChangeValue: (event: React.ChangeEvent<HTMLSelectElement>) => void
}
export default function InputLink({ onChangeKind, onChangeValue, kind, value }: InputLink) {
  return (
    <label></label>
  )
}