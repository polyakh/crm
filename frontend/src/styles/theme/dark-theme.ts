import { MantineThemeOverride } from "@mantine/core";

export const darkTheme: MantineThemeOverride = {
  fontFamily: "Arial, sans-serif",
  components: {
    TextInput: {
      styles: {
        label: {
          fontWeight: 700,
        },
      },
    },
  },
  // primaryColor: "yellow",
};
