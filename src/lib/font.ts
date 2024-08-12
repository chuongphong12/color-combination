import localFont from "next/font/local";

export const roboto = localFont({
  adjustFontFallback: false,
  src: [
    {
      path: "../assets/fonts/Roboto-Black.ttf",
      weight: "900",
    },
    {
      path: "../assets/fonts/Roboto-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../assets/fonts/Roboto-Bold.ttf",
      weight: "700",
    },
    {
      path: "../assets/fonts/Roboto-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../assets/fonts/Roboto-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/Roboto-Light.ttf",
      weight: "300",
    },
    {
      path: "../assets/fonts/Roboto-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../assets/fonts/Roboto-Medium.ttf",
      weight: "500",
    },
    {
      path: "../assets/fonts/Roboto-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../assets/fonts/Roboto-Regular.ttf",
      weight: "400",
    },
    {
      path: "../assets/fonts/Roboto-Thin.ttf",
      weight: "100",
    },
    {
      path: "../assets/fonts/Roboto-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
  ],
  variable: "--font-roboto",
});
