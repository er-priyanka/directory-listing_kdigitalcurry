import { Box, Button, Container, Flex, Heading, Input, Select, Stack, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import ProductsTable from '../Components/ProductsTable';
import AddProductsModal from '../Components/AddProductsModal';
import { AddIcon } from "@chakra-ui/icons";

const Home = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <Box bg='gray.200'  w='100%' minH={'100vh'}>
        <Stack 
        px='30px'
        py='40px'
        >
            {/* Top section */}
            <Flex gap={'20px'}>
                {/* Add products popup modal */}
                <Button 
                colorScheme='blue' 
                borderRadius='50px' 
                px='60px' py='10px' 
                gap='10px'
                leftIcon={<AddIcon />} onClick={onOpen}>
                    Add Products
                </Button>
                {/* open when click on add products button */}
                <AddProductsModal isOpen={isOpen} onClose={onClose} />
                
                <Flex 
                bg="white" gap={2}
                px='20px' py='5px' borderRadius={'50px'}
                 alignItems={'center'}>
                    <Heading fontSize={'1.6rem'}>280/400</Heading>
                    <Text fontSize='1.2rem'>Products</Text>
                </Flex>
            </Flex>

            <Flex>
                <Input w='45%' borderRightRadius='none' bg='white' placeholder='Search Products ...' />
                <Button px="30px" borderLeftRadius='none' colorScheme='blue'>Search</Button>
            </Flex>
            
            {/* Filter section */}
            <Flex justifyContent='space-between'>
                {/* part 1 */}
                <Flex gap='40px' alignItems={'center'}> 
                    <Flex gap='15px' alignItems={'center'}>
                        <Select 
                        bg="white"
                         placeholder='Products'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>

                        <Select bg='white' placeholder='Materials'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>

                        <Button bg='white' color='black'>Filter</Button>

                    </Flex>
                    
                    <Flex gap={'15px'}>
                        <Select bg='white' placeholder='Bulk Actions'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                        <Button bg='white'>Apply</Button>
                    </Flex>

                </Flex>
                
                

                {/* part 2 */}
                <Flex gap="15px" alignItems={'center'}>
                    <Text>Products</Text>
                    <Select bg='white' placeholder='25'>
                        <option value='option1'>12</option>
                        <option value='option2'>22</option>
                        <option value='option3'>23</option>
                    </Select>
                </Flex>
                
            </Flex>


            <ProductsTable />
        </Stack>
        


    </Box>
  )
}

export default Home;