import tinycolor from "tinycolor2";

export const setColorLightness = (
  color: Parameters<typeof tinycolor>[0],
  l: number
) => {
  const { h, s, a } = tinycolor(color).toHsl();

  return tinycolor({ h, s, l, a });
};
