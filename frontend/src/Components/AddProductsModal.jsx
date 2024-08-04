import { Box, Button, Flex, Heading, List, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react';
import React from 'react'


const productsList = [
  {name:'Pipes'},
  {name: 'Tubing'},
  {name: 'Pipe Fittings'},
  {name: 'Forged Fittings'},
  {name: 'Flanges'},
  {name: 'Valves'},
  {name: 'Gaskets'},
  {name: 'Instrumentation Fittings'},
  {name: 'Sheets & Plates'},
  {name: 'Bars'},
  {name: 'Electrodes'},
  {name: 'Fasteners'},
  {name: 'Bolts'},
  {name: 'Channels'}
];

const materialList = [
  {name:'Alloy Steel'},
  {name:'Alluminium'},
  {name:'Carbon Steel'},
  {name:'Copper Nickel'},
  {name:'DUplex Steel'},
  {name:'Hastelloy'},
  {name:'Incoluy'},
  {name:'Inconel'},
  {name:'Low Temperature Carbon Steel'},
  {name:'Monel'},
  {name:'Nickel Alloy'},
  {name:'Stainless Steel'},
  {name:'Super Duplex Steel'},
  {name:'Titanium'},

];

const grades = [
  {name:'F11'},
  {name:'F22'},
  {name:'F5'},
  {name:'F9'},
  {name:'F91'},
  {name:'F11'},
  {name:'F22'},
  {name:'F5'},
  {name:'F9'},
  {name:'F91'},
  
]


const AddProductsModal = ({isOpen, onClose}) => {

  return (
    <Modal size='4xl' isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>
              <Flex borderBottom='2px' borderColor='blackAlpha.300' pb='10px' w={'95%'} alignItems={'center'} justifyContent={'space-between '}>
                <Heading fontSize='1.6rem'>Add Products</Heading>
                <Text fontSize='1rem' color={'cyan.500'} >7/600 Products Selected</Text>
              </Flex>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Flex>
                  {/* products list */}
                  <Box>
                    <Text>Products</Text>
                    <List>
                      {
                        productsList.map((item, i) =>(
                          <ListItem>{item.name}</ListItem>
                        ))
                      }
                    </List>

                  </Box>

                  {/* material list */}
                  <Box>
                  <Text>Material</Text>
                    <List>
                      {
                        materialList.map((item, i) =>(
                          <ListItem>{item.name}</ListItem>
                        ))
                      }
                    </List>
                  </Box>

                  {/* grades list */}
                  <Box>
                  <Text>Grades</Text>
                    <List>
                      {
                        grades.map((item, i) =>(
                          <ListItem>{item.name}</ListItem>
                        ))
                      }
                    </List>
                  </Box>
                </Flex>


            </ModalBody>
            <ModalFooter>
                <Button>Close</Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
  )
}

export default AddProductsModal;