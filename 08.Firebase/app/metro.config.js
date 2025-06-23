//necessário para o firebase com localstorage funcionar
//artigo: https://ran-bajra.medium.com/fixing-component-auth-has-not-been-registered-yet-in-react-native-firebase-auth-hermes-26480a12107d
const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.sourceExts.push('cjs');
defaultConfig.resolver.unstable_enablePackageExports = false;

module.exports = defaultConfig;