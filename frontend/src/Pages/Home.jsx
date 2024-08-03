import { Box, Button, Container, Flex, Heading, Input, Select, Stack, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import ProductsTable from '../Components/ProductsTable';
import AddProductsModal from '../Components/AddProductsModal';
import { AddIcon } from "@chakra-ui/icons";

const Home = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <Box bg='gray.200'  w='100%' minH={'100vh'} border='1px'>
        <Stack 
        border='1px' 
        mx='30px'
        my='40px'
        >
            {/* Top section */}
            <Flex>
                {/* Add products popup modal */}
                <Button colorScheme='blue' borderRadius='50px'  leftIcon={<AddIcon />} onClick={onOpen}>
                    Add Products
                </Button>
                <AddProductsModal isOpen={isOpen} onClose={onClose} />
                <Flex>
                    <Heading>280/400</Heading>
                    <Text>Products</Text>
                </Flex>
            </Flex>

            <Flex>
                <Input placeholder='Search Products ...' />
                <Button>Search</Button>
            </Flex>
            
            {/* Filter section */}
            <Flex>
                {/* part 1 */}
                <Flex>
                    <Flex>
                        <Select placeholder='Select option'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>

                        <Select placeholder='Select option'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>

                        <Button>Filter</Button>

                    </Flex>
                    
                    <Flex>
                        <Select placeholder='Select option'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                        <Button>Apply</Button>
                    </Flex>

                </Flex>
                
                

                {/* part 2 */}
                <Flex>
                    <Text>Products</Text>
                    <Select placeholder='Select option'>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </Flex>
                
            </Flex>


            <ProductsTable />
        </Stack>
        


    </Box>
  )
}

export default Home;