// dependencies
import styled from 'styled-components'

// components
import {
  Select as SelectMI,
  FormControl as FormControlMI,
  InputLabel as InputLabelMI,
  FormHelperText as FormHelperTextMI
} from '@mui/material'

// interfaces
import {
  SelectProps,
  FormControlProps,
  InputLabelProps,
  FormHelperTextProps
} from './interface'

export const Select = styled(SelectMI)<SelectProps>`
  width: 100%;
`

export const FormControl = styled(FormControlMI)<FormControlProps>`
  width: 100%;
  min-width: 200px;
`

export const InputLabel = styled(InputLabelMI)<InputLabelProps>``

export const FormHelperText = styled(FormHelperTextMI)<FormHelperTextProps>`
  color: red;
`
