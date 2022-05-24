import React, { FC, useEffect, useState } from 'react'

// interfaces
import { ModalProps } from './interface'

//componentes
import { Button, Box, Modal, Typography } from '@mui/material'
import { Flex } from 'reflexbox'
import { Card } from './style'
import { TextField } from '../TextField'

const style = {
  position: 'absolute',
  width: 600,
  backgroundColor: '#014421',
  padding: 4,
  borderRadius: 20,
}

function rand() {
  return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

export const ModalInventory: FC<ModalProps> = ({
  isEdit = false,
  newResource = false,
  open = false,
  handleClose,
}: ModalProps) => {
  const [modalStyle] = useState(getModalStyle)
  const [showMode, setShowMode] = useState(true)

  useEffect(() => {
    if (open && (isEdit || newResource)) {
      setShowMode(false)
    }
  }, [open])

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal">
      <Box style={modalStyle} sx={style}>
        <Flex
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 150,
            borderRadius: 20,
          }}
        >
          <Typography variant="h4" color="#FBFAFA">
            Novo Estoque
          </Typography>
        </Flex>

        <Flex style={{ justifyContent: 'center' }} mt={[10]} mx={[25]}>
          <Card
            style={{
              padding: 20,
              width: '100%',
              height: '100px',
              borderRadius: 10,
              backgroundColor: '#ffffff',
            }}
          >
            {showMode ? (
              <TextField id="name" defaultValue="Estoque de frutas" />
            ) : (
              <TextField id="name" defaultValue="Estoque" />
            )}
          </Card>
        </Flex>

        {showMode ? (
          <Flex style={{ justifyContent: 'center' }} mt={[1]}>
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
              Editar
            </Button>
          </Flex>
        ) : (
          <Flex style={{ justifyContent: 'center' }} mt={[1]}>
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
              Criar
            </Button>
          </Flex>
        )}
      </Box>
    </Modal>
  )
}
