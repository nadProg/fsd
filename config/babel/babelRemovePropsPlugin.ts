// eslint-disable-next-line import/no-extraneous-dependencies
import { PluginItem } from '@babel/core';

export const babelRemovePropsPlugin = (): PluginItem => ({
  visitor: {
    Program(path, state) {
      const forbiddenNames = state.opts.props || [];

      path.traverse({
        JSXIdentifier(current) {
          const nodeName = current.node.name;

          if (forbiddenNames.includes(nodeName)) {
            current.parentPath.remove();
          }
        },
      });
    },
  },
});
