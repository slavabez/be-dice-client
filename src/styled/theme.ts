interface Theme {
  main: string,
  secondary: string,
  bg: string,
  headerBg: string,
  logoColor: string,
  mainContrast: string;
  mainFaded: string;
}

export const dark: Theme = {
  main: "#00D0AE",
  secondary: "rgb(255, 110, 80)",
  bg: `linear-gradient(to right, rgb(248, 207, 247), rgb(212, 251, 254));`,
  headerBg: "#000",
  logoColor: "white",
  mainContrast: "#000",
  mainFaded: "#fff"
};

export const bright: Theme = {
  main: "#00D0AE",
  secondary: "rgb(255, 110, 80)",
  bg: `linear-gradient(to right, rgb(248, 207, 247), rgb(212, 251, 254));`,
  headerBg: "#fff",
  logoColor: "#00D0AE",
  mainContrast: "#fafafa",
  mainFaded: "#b2bac1"
};

