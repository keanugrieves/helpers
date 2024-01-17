export type MakeFontFamilyArgs = {
  baseFamily?: "custom" | "monospace" | "sans_serif" | "serif";
  defaultFamilies?: {
    emoji?: string[];
    monospace?: string[];
    sansSerif?: string[];
    serif?: string[];
  };
  family: string;
};

export const makeFontFamily = ({
  baseFamily = "sans_serif",
  defaultFamilies: {
    emoji: defaultEmojiFamilies = [
      `'Apple Color Emoji'`,
      `'Segoe UI Emoji'`,
      `'Segoe UI Symbol'`,
      `'Noto Color Emoji'`,
    ],
    monospace: defaultMonospaceFamilies = [
      "ui-monospace",
      "SFMono-Regular",
      "Menlo",
      "Monaco",
      "Consolas",
      `'Liberation Mono'`,
      `'Courier New'`,
      "monospace",
    ],
    sansSerif: defaultSansSerifFamilies = [
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      `'Segoe UI'`,
      "Roboto",
      `'Helvetica Neue'`,
      "Arial",
      `'Noto Sans'`,
      "sans-serif",
    ],
    serif: defaultSerifFamilies = [
      "ui-serif",
      "Georgia",
      "Cambria",
      `'Times New Roman'`,
      "Times",
      "serif",
    ],
  } = {},
  family,
}: MakeFontFamilyArgs) => {
  const fontFamilies: string[] = [`${family}`];

  switch (baseFamily) {
    case "monospace": {
      fontFamilies.push(...defaultMonospaceFamilies);

      break;
    }

    case "sans_serif": {
      fontFamilies.push(...defaultSansSerifFamilies);

      break;
    }

    case "serif": {
      fontFamilies.push(...defaultSerifFamilies);

      break;
    }

    case "custom":
    default: {
      break;
    }
  }

  fontFamilies.push(...defaultEmojiFamilies);

  return fontFamilies;
};
