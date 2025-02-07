/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require("path");
module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  watchFolders: [
    // watch for shared folder changes
    path.resolve(__dirname, '../shared'),
    path.resolve(__dirname, '../../node_modules'),
  ],
};
