const PRIMARY_PURPLE = "#c850c0";
const SECONDARY_ORANGE = "#ffcc70";

const WHITE = "#ffffff";
const GREY = "#c2c2c2";

const DARK_GREY = "#161616";
const MEDIUM_GREY = "#2d3436";
const LIGHT_GREY = "#636e72";

export const addOpacityToColor = (hexCode: string, opacacy: number): string =>
  hexCode + Math.round(opacacy * 255).toString(16);

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
  card: {
    darkGrey: string;
    mediumGrey: string;
    lightGrey: string;
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
  card: {
    darkGrey: DARK_GREY,
    mediumGrey: MEDIUM_GREY,
    lightGrey: LIGHT_GREY,
  },
});
