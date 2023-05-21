import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import ErrorDiv from "./ErrorDiv";
import 'bootstrap/dist/css/bootstrap.min.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "ReactComponentLibrary/ErrorDiv",
    component: ErrorDiv,
} as Meta<typeof ErrorDiv>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ErrorDiv> = (args) => <ErrorDiv {...args} />;

export const HelloError = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloError.args = {
    error: "Hello Error!",
};

export const ClickError = Template.bind({});
ClickError.args = {
    error: "Click Error!",
};
