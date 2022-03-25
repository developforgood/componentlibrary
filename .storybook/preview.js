// .storybook/preview.js
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}


export const globalTypes = {
  brandColor: {
    name: 'BrandColor',
    description: 'Brand Color for components',
    defaultValue: '#77C9FF',
    toolbar: {
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: [
        { value : "rgba(237, 106, 90, 0.54)", title : "Ultralight DFG Red"},
        { value : "#ED6A5A", title : "Light DFG Red"},
        { value : "#EA513E", title : "DFG Red"},
        { value : "#E6341E", title : "Strong DFG Red"},
        { value : "#77C9FF", title : "Ultralight DFG Blue"},
        { value : "#0071BC", title : "Light DFG Blue"},
        { value : "#004F96", title : "DFG Blue"},
        { value : "#003C72", title : "Strong DFG Blue"},
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
  // buttonColor: {
  //   name: 'ButtonColor',
  //   description: 'Button Color for components',
  //   defaultValue: '#0067C5',
  //   toolbar: {
  //     icon: 'paintbrush',
  //     // Array of plain string values or MenuItem shape (see below)
  //     items: [
  //       { value : "#0067C5", title : "Background Light Blue"},
  //       { value : "#004787", title : "Background Dark Blue"},
  //     ],
  //     // Property that specifies if the name of the item will be displayed
  //     showName: true,
  //   },
  // },
};
// Initialize color for brand color
process.env.DFG_BRAND_COLORS = {
  // Brand
  ultraLightDFGRedColor : "rgba(237, 106, 90, 0.54)",
  lightDFGRedColor : "#ED6A5A",
  DFGRedColor : "#EA513E",
  strongDFGRedColor : "#E6341E",
  ultraLightDFGBlueColor : "#77C9FF",
  lightDFGBlueColor : "#0071BC",
  DFGBlueColor : "#004F96",
  strongDFGBlueColor : "#003C72",
};
// Initialize color for text color
process.env.DFG_TEXT_COLORS = {
  placeholderTextColor : "#E0E5E9",
  primaryTextColor : "#041A29",
  secondaryTextColor : "rgba(4, 26, 41, 0.93)",
};
// Initialize color for background
process.env.DFG_BACKGROUND_COLORS = {
  backgroundColor : "#EFF2F5",
};
// Initialize color for button background
process.env.DFG_BUTTON_COLORS = {
  backgroundLightBlue : "#0067C5",
  backgroundDarkBlue : "#004787",
  buttonOutlineColor : "#0067C5",
};
// Initialize color for success
process.env.DFG_SUCCESS_COLORS = {
  successBackgroundColor : "#B7F0B9",
  successOutlineColor : "#3BB43F",
};
// Initialize color for error
process.env.DFG_ERROR_COLORS = {
  errorBackgroundColor : "#F0B9B9",
  errorOutlineColor : "#EE3A3A",
};
// Initialize color for warning
process.env.DFG_WARNING_COLORS = {
  warningBackgroundColor : "#FDF1CE",
  warningOutlineColor : "#ECC955",
};
// Initialize color for Field Outline
process.env.DFG_FIELD_OUTLINE_COLORS = {
  fieldBackgroundColor : "#BDC6CC",
  fieldOutlineColor : "#60707B",
};




