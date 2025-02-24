import { MantineThemeOverride } from "@mantine/core";

export const lightTheme: MantineThemeOverride = {
  fontFamily: "Arial, sans-serif",
  // primaryColor: "blue",
  components: {
    TextInput: {
      styles: {
        label: {
          fontWeight: 700,
        },
      },
    },

    InputWrapper: {
      styles: () => ({
        label: {
          fontWeight: 700, // Applies a bold font weight to all labels
          // Additional styling can be added here if needed
        },
      }),
    },
    Select: {
      styles: {
        labelWrapper: {
          // Parent wrapper of the label
          fontWeight: 700,
        },
        label: {
          // The label itself
          fontWeight: 700,
        },
        root: {
          ".mantine-Select-labelWrapper .mantine-Select-label": {
            fontWeight: 700,
          },
          ".mantine-InputWrapper-label": {
            fontWeight: 700,
          },
        },
      },
    },
  },
};
