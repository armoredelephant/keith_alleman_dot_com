/**
 * Provides a helper to shallow and mount components with a ThemeProvider in test using jest
 *
 * Docs
 * - https://github.com/styled-components/jest-styled-components#theming
 *
 * Related answers and issues
 * - https://github.com/styled-components/styled-components/issues/1319#issuecomment-432610832
 * - https://github.com/styled-components/jest-styled-components/issues/61#issuecomment-421043968
 * - https://github.com/styled-components/jest-styled-components/issues/106
 *
 * Alternative helpers
 * - https://github.com/styled-components/jest-styled-components/issues/61#issuecomment-421043968
 */
import React from 'react'
import { mount, shallow } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import 'jest-styled-components'

// every test uses the base theme, if no custom theme is provided
import defaultTheme from './theme'

export const shallowWithTheme = (children, customTheme) => {
  const theme = customTheme || defaultTheme
  return shallow(children, { context: theme })
}

export const mountWithTheme = (Component, customTheme) => {
  const theme = customTheme || defaultTheme
  return mount(<ThemeProvider theme={theme}>{Component}</ThemeProvider>)
}