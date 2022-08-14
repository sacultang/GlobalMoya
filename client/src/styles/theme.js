export const pxToRem = (size) => `${size / 16}rem`;
export const fontSize = {
  FontSize24: pxToRem(24),
  FontSize22: pxToRem(22),
  FontSize20: pxToRem(20),
  FontSize18: pxToRem(18),
  FontSize16: pxToRem(16),
  FontSize14: pxToRem(14),
  FontSize12: pxToRem(12),
};
export const fontWeight = {
  FontWeight800: "800",
  FontWeight700: "700",
  FontWeight600: "600",
  FontWeight500: "500",
  FontWeight400: "400",
  FontWeight300: "300",
};
export const colors = {
  white: "#fff",
  gray100: "#fcfcfc",
  gray150: "#f5f5f5",
  gray200: "#efefef",
  gray250: "#e8e8e8",
  gray300: "#dfdfdf",
  gray350: "#c8c8c8",
  gray400: "#b7b7b7",
  gray500: "#949494",
  gray600: "#777777",
  gray700: "#555555",
  gray750: "#3f3f3f",
  gray770: "#383838",
  gray800: "#2a2a2a",
  gray850: "#1f1f1f",
  gray870: "#1a1a1a",
  gray900: "#111111",
  black: "#000",
  pointOrange100: "#FC5B3F ",
  pointOrange200: "#EA412A",
  alertRed100: "#ee3819",
  alertRed200: "#ea2d0d",
};
export const common = {
  flexCenter: `
    display:flex;
    justify-content:center;
    align-items:center;
  `,
};
const deviceSizes = {
  mobile: {
    maxWidth: pxToRem(479),
  },
  tablet: {
    minWidth: pxToRem(480),
    maxWidth: pxToRem(767),
  },
  laptop: {
    minWidth: pxToRem(768),
    maxWidth: pxToRem(1023),
  },
};
export const device = {
  mobile: `screen and (max-width:${deviceSizes.mobile.maxWidth})`,
  tablet: `screen and (min-width:${deviceSizes.tablet.minWidth}) and (max-width:${deviceSizes.tablet.maxWidth})`,
  laptop: `screen and (min-width:${deviceSizes.laptop.minWidth}) and (max-width:${deviceSizes.laptop.maxWidth})`,
};
export const cardImgType = {
  TextOnly: `
    display:none;
  `,
  Magazine: `
    margin:14px 16px 0 0;
    width:106px;
    height: 80px;
    object-fit: cover;
    display:inline-block;
  `,
  CardType: `
    object-fit: cover;
    width: 100%;
    height:208px;
  `,
};
export const cardTextType = {
  TextOnly: `
  padding: 14px 16px 0 16px;
`,
  Magazine: `
  padding: 14px 0 0 16px;
  width: 206px;
`,
  CardType: `
  padding: 14px 16px 0 16px;
`,
};
const theme = {
  fontSize,
  colors,
  fontWeight,
  common,
  device,
};

export default theme;
