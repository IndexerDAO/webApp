import {
  extendTheme,
  withDefaultColorScheme,
  theme as btheme,
} from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme(
  {
    colors: {
      brand: '#B5E853',
      //   desc: {
      //     900: btheme.colors.gray[900],
      //     400: btheme.colors.gray[400],
      //   },
    },
    components: {
      Alert: {
        defaultProps: {
          colorScheme: 'blue',
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: 'brand' })
);

export default theme;
