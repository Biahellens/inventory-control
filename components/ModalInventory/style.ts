// dependencies
import styled from 'styled-components'

import {
  Card as CardMI,
  CardContent as CardContentMI,
  Typography as TypographyMI,
} from '@mui/material'

// interfaces
import { CardProps, CardContentProps, TypographyProps } from '@mui/material'

export const CardImage = styled.div`
  height: '140vh';
`

export const Card = styled(CardMI)<CardProps>``

export const CardContent = styled(CardContentMI)<CardContentProps>`
  background-color: ${({ theme }) => theme.lightTheme.pallete.primary};
`

export const Typography = styled(TypographyMI)<TypographyProps>`
  text-align: justify;
`
