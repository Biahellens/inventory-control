// dependencies
import React, { FC } from 'react'

// components
import {
  TextFieldStyled
} from './style'

// interfaces
import { TextFieldProps } from './interface'

export const TextField: FC<TextFieldProps> = ({
  variant = 'outlined',
  fullWidth = true,
  ...rest
}: TextFieldProps) => {

  return (
    <TextFieldStyled
      variant={variant}
      fullWidth={fullWidth}
      {...rest}
    />
  )
}
