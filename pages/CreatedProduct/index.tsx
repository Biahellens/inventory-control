// dependencies
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

//componentes
import { AppBar, Button, Typography, Toolbar } from '@mui/material'

import { SelectField, TextField } from '../../components'

//style
import { Container, MenuItem, Wrapper } from './style'

export const CreateProductPage = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#014421',
      },
      secondary: {
        main: '#6EEB83',
      },

      warning: {
        main: '#FF5714',
      },
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Container width={1}>
          <AppBar
            position="fixed"
            color="primary"
            sx={{ height: 230, justifyContent: 'center', alignItems: 'center' }}
          >
            <Toolbar>
              <Typography variant="h3" noWrap component="div" color="secondary">
                Novo Produto
              </Typography>
            </Toolbar>
          </AppBar>
        </Container>
      </Wrapper>
      <Container padding="5vh" width={[1]}>
        <form>
          <Wrapper marginTop="30vh">
            <Container width={[1, 1 / 2]}>
              <Typography variant="h5" noWrap component="div" color="primary">
                Nome do produto
              </Typography>
              <TextField id="name" defaultValue="Morango" />
            </Container>

            <Container width={[1, 1 / 2]}>
              <Typography variant="h5" noWrap component="div" color="primary">
                Estoque
              </Typography>
              <SelectField inputProps={{}} id="estoque">
                <MenuItem value="1">Estoque de Frutas</MenuItem>
                <MenuItem value="2">Estoque de Verduras</MenuItem>
                <MenuItem value="3">Estoque de Legumes</MenuItem>
              </SelectField>
            </Container>

            <Container width={[1]}>
              <Typography variant="h5" noWrap component="div" color="primary">
                Imagem (url da imagem)
              </Typography>
              <TextField defaultValue="url" />
            </Container>

            <Container width={[1, 1 / 2]}>
              <Typography variant="h5" noWrap component="div" color="primary">
                Quantidade
              </Typography>
              <TextField defaultValue="1" />
            </Container>

            <Container width={[1, 1 / 2]}>
              <Typography variant="h5" noWrap component="div" color="primary">
                Medida(kg, g, unidade)
              </Typography>
              <SelectField inputProps={{}} id="medida">
                <MenuItem value="1">Kg</MenuItem>
                <MenuItem value="2">Grama</MenuItem>
                <MenuItem value="3">Unidade</MenuItem>
              </SelectField>
            </Container>
          </Wrapper>
        </form>
        <Container>
          <Button
            variant="contained"
            color="secondary"
            style={{ margin: '1vh', height: '5vh', borderRadius: '4vh' }}
          >
            Cancelar
          </Button>

          <Button
            variant="contained"
            color="warning"
            style={{ margin: '1vh', height: '5vh', borderRadius: '4vh' }}
          >
            Salvar
          </Button>
        </Container>
      </Container>
    </ThemeProvider>
  )
}
