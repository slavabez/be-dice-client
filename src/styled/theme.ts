interface Theme {
  main: string,
  secondary: string,
  bg: string,
  headerBg: string,
  logoColor: string
}

export const dark: Theme = {
  main: "grey",
  secondary: "orange",
  bg: `linear-gradient(to right, rgb(248, 207, 247), rgb(212, 251, 254));`,
  headerBg: "#000",
  logoColor: "white"
};

export const bright: Theme = {
  main: "#00D0AE",
  secondary: "yellow",
  bg: `linear-gradient(to right, rgb(248, 207, 247), rgb(212, 251, 254));`,
  headerBg: "#fff",
  logoColor: "#00D0AE"
};

