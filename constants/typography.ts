// constants/typography.ts
export const FONT_FAMILY = {
  regular: "Onest-Regular",
  medium: "Onest-Medium",
  bold: "Onest-Bold",
};

export const TYPOGRAPHY = {
  header01: {
    fontSize: 32,
    lineHeight: 110, // cuidado, alguns valores parecem % no Figma, mas no RN é absoluto
    fontFamily: FONT_FAMILY.bold,
  },
  header02: {
    fontSize: 24,
    //lineHeight: 100,
    fontFamily: FONT_FAMILY.bold,
  },
  headerConstructions: {
    fontSize: 24,
    lineHeight: 125,
    fontFamily: FONT_FAMILY.bold,
  },
  body: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: FONT_FAMILY.regular,
  },
  bodyEmphasis: {
    fontSize: 18,
    lineHeight: 150,
    fontFamily: FONT_FAMILY.medium,
  },
  detail: {
    fontSize: 12,
    lineHeight: 120,
    fontFamily: FONT_FAMILY.regular,
  },
  button: {
    fontSize: 18,
    //lineHeight: 150,
    fontFamily: FONT_FAMILY.bold,
  },
  buttonSimple: {
    fontSize: 14,
    lineHeight: undefined, // no Figma tá "Auto", então deixa sem
    fontFamily: FONT_FAMILY.medium,
  },
};
