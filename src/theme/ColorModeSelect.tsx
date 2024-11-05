import * as React from "react";
import { useColorScheme } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectProps } from "@mui/material/Select";

export const ColorModeSelect = (props: SelectProps) => {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
    <Select
      value={mode}
      onChange={(event) =>
        setMode(event.target.value as "system" | "light" | "dark")
      }
      SelectDisplayProps={{
        // @ts-expect-error: data-screenshot is not a valid attribute
        "data-screenshot": "toggle-mode",
      }}
      {...props}
    >
      <MenuItem value="system">System</MenuItem>
      <MenuItem value="light">Light</MenuItem>
      <MenuItem value="dark">Dark</MenuItem>
    </Select>
  );
};
