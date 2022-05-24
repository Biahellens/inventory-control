// dependencies
import React, { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

//componentes
import { Box, Button, IconButton, Modal, Typography } from '@mui/material'

import { CardProduct, Menu, ModalInventory } from '../../components'

//style
import { Wrapper, Container } from './style'

//icons
import AddCircleIcon from '@mui/icons-material/AddCircle'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

export const ProductPage = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#014421',
      },
      secondary: {
        main: '#6EEB83',
      },
    },
  })

  const [stateModalInventory, setStateModalInventory] = useState(false)

  function closeModal(): void {
    setStateModalInventory(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Container>
          <Menu />
        </Container>

        <Container marginTop="4vh" justifyContent="center" width={[1]}>
          <Container>
            <Button
              variant="contained"
              color="secondary"
              style={{ margin: '1vh', height: '5vh', borderRadius: '4vh' }}
              onClick={() => setStateModalInventory(true)}
            >
              <IconButton>
                <AddCircleIcon />
                Adicionar Estoque
              </IconButton>
            </Button>
          </Container>
          <Container>
            <Button
              variant="contained"
              color="secondary"
              style={{ margin: '1vh', height: '5vh', borderRadius: '4vh' }}
            >
              <IconButton>
                <AddCircleIcon />
                Adicionar Produto
              </IconButton>
            </Button>
          </Container>
        </Container>
        <Container width={[1]} justifyContent="center">
          <Typography variant="h3" color="primary" width={[1]}>
            Estoque de Frutas
            <IconButton>
              <DeleteIcon fontSize="medium" color="warning" />
            </IconButton>
            <IconButton>
              <EditIcon fontSize="medium" color="secondary" />
            </IconButton>
          </Typography>

          <Container justifyContent="space-around">
            <Container>
              <CardProduct />
            </Container>
            <Container>
              <CardProduct />
            </Container>
            <Container>
              <CardProduct />
            </Container>
            <Container>
              <CardProduct />
            </Container>
          </Container>
        </Container>
        <ModalInventory
        newResource={true}
        open={stateModalInventory}
        handleClose={closeModal}
      />
      </Wrapper>
    </ThemeProvider>
  )
}
