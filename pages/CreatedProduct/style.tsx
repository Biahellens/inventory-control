// dependencies
import styled from 'styled-components'

// components
import { Flex, Box } from 'reflexbox'

import {
  MenuItem as MenuItemMI
} from '@mui/material'

// interfaces
import {
  MenuItemProps
} from '@mui/material'

import { BoxProps } from 'reflexbox'

export const Wrapper = styled(Flex)`
  flex-wrap: wrap;
  justify-content: center;
`

export const Container = styled(Box)<BoxProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2vh;
`
export const MenuItem = styled(MenuItemMI)<MenuItemProps>`
`
