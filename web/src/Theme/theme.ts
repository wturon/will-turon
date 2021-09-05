const PRIMARY_PURPLE = "#c850c0";
const SECONDARY_ORANGE = "#ffcc70";

const WHITE = "#ffffff";
const GREY = "#c2c2c2";

type Theme = {
  name: string;
  gradient: {
    primary: string;
    secondary: string;
  };
  text: {
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
  text: {
    primary: WHITE,
    secondary: GREY,
  },
});
