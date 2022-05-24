// dependencies
import styled from 'styled-components'

// components
import { TextField as TextFieldMI } from '@mui/material'

// interfaces
import { TextFieldProps } from './interface'

export const TextFieldStyled = styled(TextFieldMI)<TextFieldProps>`
  min-width: 400px;
`
