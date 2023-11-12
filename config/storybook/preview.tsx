import type { Preview } from "@storybook/react";
import '../../src/app/styles/index.less'
import { BrowserRouter } from "react-router-dom";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div className={`app light`}>
          <Story/>
        </div>
      </BrowserRouter>
    )
  ],
};

export default preview;
