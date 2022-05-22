// dependencies
import styled from 'styled-components'

// components
import { Flex, Box } from 'reflexbox'


// interfaces
import { BoxProps } from 'reflexbox'

export const Wrapper = styled(Flex)`
  flex-wrap: wrap;
  justify-content: center;
`

export const Container = styled(Box)<BoxProps>`
  display: flex;
  flex-wrap: wrap;
  padding: 2vh;
`
