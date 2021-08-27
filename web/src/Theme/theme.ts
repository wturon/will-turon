export const PURPLE = "#c850c0";
export const LIGHT_ORANGE = "#ffcc70";

export type Theme = {
  name: string;
  gradient: {
    primary: string;
    secondary: string;
  };
};

export const theme = (): Theme => ({
  name: "Main Theme",
  gradient: {
    primary: PURPLE,
    secondary: LIGHT_ORANGE,
  },
});
