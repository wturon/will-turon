const PRIMARY_PURPLE = "#c850c0";
const SECONDARY_ORANGE = "#ffcc70";

type Theme = {
  name: string;
  gradient: {
    primary: string;
    secondary: string;
  };
};

export const theme = (): Theme => ({
  name: "Main Theme",
  gradient: {
    primary: PRIMARY_PURPLE,
    secondary: SECONDARY_ORANGE,
  },
});
