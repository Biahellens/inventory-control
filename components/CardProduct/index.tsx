// dependencies
import React, { useState } from 'react'

import { createTheme, ThemeProvider } from '@mui/material/styles'

// componentes
import { Flex, Box } from 'reflexbox'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from '@mui/material'

//style
import {
  Wrapper,
  Container
} from './style'

//icons
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'

export const CardProduct = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#6EEB83',
      },
      warning: {
        main: '#FF5714',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Card
        style={{
          borderRadius: 25,
          minWidth: 300,
          maxWidth: 320,
          borderColor: 'primary',
          border: 2,
        }}
      >

        <CardContent
          style={{
            marginTop: 10,
          }}
        >
          <Flex justifyContent='flex-end'>
            <Box width={[1 / 3]} >
              <IconButton>
                <DeleteIcon fontSize="medium" color="warning" />
              </IconButton>
              <IconButton>
                <EditIcon fontSize="medium" color="primary" />
              </IconButton>
            </Box>
          </Flex>
        </CardContent>
        <CardContent>
        <Flex flexWrap="wrap" justifyContent="center">
          <CardMedia
          component="img"
          height="194"
          src={'https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/oleo-essencia-morango-100ml-fruta-puro-essencia-massagem-D_NQ_NP_960102-MLB31202671230_062019-F[1]-1000x1000.jpg'}
          alt="Morango"
          />
          <Box width={[1, 1 / 2]}  height="auto">
              <Typography variant="h4" textAlign='center'>
                Morango
              </Typography>
            </Box>
            </Flex>
        </CardContent>

        <CardContent>
          <Flex flexWrap="wrap" justifyContent="space-between">
            <Box width={[1 / 3]}>
              <Typography variant="h6"> Unidade </Typography>
            </Box>
            <Box width={[1 / 3]}>
              <IconButton>
                <RemoveCircleIcon fontSize="small" color="warning" />
              </IconButton>
              <Typography variant="overline">
                4
              </Typography>
              <IconButton>
                <AddCircleIcon fontSize="small" color="primary" />
              </IconButton>
            </Box>

          </Flex>
        </CardContent>
      </Card>
    </ ThemeProvider>
  )
}
