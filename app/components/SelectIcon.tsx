import React from "react";

type IconOptions = {
  id: number;
  value: string;
}

type SelectIcon = {
  selectedIconId: number;
  iconOptions: IconOptions[];
  onSelectIcon: (iconId: number) => void
}

export default function SelectIcon({ selectedIconId, onSelectIcon, iconOptions }: SelectIcon) {
  return (
    <div
      role="combobox"
      aria-label="Select an icon"
      aria-controls="icon-options-list"
      aria-expanded="false"
    >
      { iconOptions.map(iconOption => (
        <span aria-selected={selectedIconId === iconOption.id} onClick={() => onSelectIcon(iconOption.id)} role="option" key={iconOption.id}>
          {iconOption.value}
        </span>
      )) }
    </div>
  )
}