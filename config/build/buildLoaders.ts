import { RuleSetRule, RuleSetUseItem } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
  const styleLoaderItem: RuleSetUseItem = isDev
    ? 'style-loader'
    : MiniCssExtractPlugin.loader;

  const cssLoaderItem: RuleSetUseItem = {
    loader: 'css-loader',
    options: {
      modules: {
        auto: (resPath: string) => resPath.includes('.module.'),
        localIdentName: isDev
          ? '[path][name]__[local]--[hash:base64:5]'
          : '[hash:base64:8]',
      },
    },
  };

  const sassLoader: RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [styleLoaderItem, cssLoaderItem, 'sass-loader'],
  };

  const typeScriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [typeScriptLoader, sassLoader];
};

export default buildLoaders;
