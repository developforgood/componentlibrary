import Button from "../Button";

export default {
    title: "Components/Navigation/Button",
    component: Button,
    argTypes: {
        type: {
            description: "String prop passed to set the appearance of button. Currently set to default colors but can easily be changed in CSS to match brand colors.",
        },
        icon: {
            description: "Boolean determining whether to show the icon or not"
        },
        state: {
            options: ['default', 'selected', 'disabled'],
            control: { type: 'select' },
            description: "String prop passed to set the state of the button, hover is also a state but is not needed to be set",
        },
        label: {
            description: "String prop passed to set the label of the button"
        }
    },
    parameters: {
        docs: {
            description: {
              component: "Buttons are versatile in utility and are meant to be used throughout the webpage either standalone or as part of other components (navigation bar, models, cards, etc.) whenever you want a user to take action.  These designs mirror those of the Button component in our React Native library.",
            },
          },
    },
};

const Templatea = (args, { globals: { brandColor, brandFont } }) => <Button {...args} fontFamily={brandFont} color={brandColor} />;


export const Default = Templatea.bind({});

Default.args = { 
    type: "filled",
    icon: false,
    state: 'default',
    size: 'md',
    iconAlign: 'right'
};

const ButtonType = (args) => 
    <div style={{display: "flex"}}>
    <Button {...args} type="elevated" /> 
    <Button {...args} type="filled" />
    <Button {...args} type="outlined" />
    <Button {...args} type="text" />
    </div>;
export const ButtonTypes = ButtonType.bind({});

ButtonTypes.args = { 
    ...Default.args,
};
ButtonTypes.parameters = {
    docs: {
      description: {
        story: 'There are four main types of buttons (Elevated, Filled, Outlined, Text) that have different emphasis with filled being the “primary” emphasis and outlined and text being less so respectively. ',
      },
    },
  };
const ButtonSize = (args) => 
    <div style={{display: "flex"}}>
    <Button {...args} size="sm" /> 
    <Button {...args} size="md" />
    <Button {...args} size="lg"/>
    </div>;
export const ButtonSizes = ButtonSize.bind({});

ButtonSizes.args = { 
    ...Default.args,
};

ButtonSizes.parameters = {
    docs: {
      description: {
        story: 'The sizes of the buttons sets the height of the button and adjusts the padding and font size automatically to fit the size. There are 3 sizes that a button can be: small, medium, and large, with the default being medium. They are represented by “sm”, “md”, and “lg” respectively and can be passed to the size prop.',
      },
    },
  };

const ButtonIcon = (args) => 
    <div style={{display: "flex"}}>
    <Button {...args} /> 
    <Button {...args} icon="true" iconAlign="right" />
    <Button {...args} icon="true" iconAlign="left"/>
    </div>;


export const ButtonIcons = ButtonIcon.bind({});


ButtonIcons.args = { 
    ...Default.args,
};

ButtonIcons.parameters = {
    docs: {
      description: {
        story: 'Icons can be added through modifying the pass passed in through the icon prop.  Note that the button comes with a default Icon Placeholder (a dashed rectangle), one can easily replace the Icon component inside the button with a icon of their choosing (with for example a component from an imported icon library) through the icon prop.  Icons can either be on the left or right side of the label, by default it is on the left, however one can pass “left” or “right” to the iconAlign prop to adjust it to their respective alignments.',
      },
    },
  };