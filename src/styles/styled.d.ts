import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    responsive: {
      desktop: string;
      tablet: string;
      mobile: string;
    };

    colors: {
      yellow: string;
      backgroundBlack: string;
    };
  }
}
