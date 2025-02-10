import { Theme } from "@mui/material/styles";

export const shadows = (theme: Theme) => {
  return [
    "none",
    `0px 4px 8px 0px #0000000F, 0px 0px 4px 0px #0000000A`,
    `0px 2px 8px 0px #9090901F`,
    `0px 4px 8px 0px #CFCFCF3D`,
    ...theme.shadows.filter((_, index) => index > 3),
  ];
};
