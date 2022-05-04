import { parameters } from "../../.storybook/preview";
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
              component: "Button component to be used on its own within the webpage or within other components (such as the Navigation Bar). These designs mirror those of the Button component in our React Native library.",
            },
          },
    },
};

const Templatea = (args, { globals: { brandColor, brandFont } }) => <Button {...args} fontFamily={brandFont} color={brandColor} />;


export const Default = Templatea.bind({});

Default.args = { 
    type: "primary",
    icon: false,
    state: null
};

export const Selected = Templatea.bind({});

Selected.args = { 
    ...Default.args,
    state: 'selected'
};

export const Disabled = Templatea.bind({});

Disabled.args = { 
    ...Default.args,
    state: 'disabled',
};