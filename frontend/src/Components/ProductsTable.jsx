import { Flex, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react';

const data = [
  {
    product:'Pipes',
    grade: "304",
    material: "stainless steel",
    unitLength: "6-12 meter",
    shape: 'round'
  },
  {
    product:'Pipes',
    grade: "304",
    material: "stainless steel",
    unitLength: "6-12 meter",
    shape: 'round'
  },
  {
    product:'Pipes',
    grade: "304",
    material: "stainless steel",
    unitLength: "6-12 meter",
    shape: 'round'
  },
  {
    product:'Pipes',
    grade: "304",
    material: "stainless steel",
    unitLength: "6-12 meter",
    shape: 'round'
  },
  {
    product:'Pipes',
    grade: "304",
    material: "stainless steel",
    unitLength: "6-12 meter",
    shape: 'round'
  },
  {
    product:'Pipes',
    grade: "304",
    material: "stainless steel",
    unitLength: "6-12 meter",
    shape: 'round'
  },
  {
    product:'Pipes',
    grade: "304",
    material: "stainless steel",
    unitLength: "6-12 meter",
    shape: 'round'
  },
  {
    product:'Pipes',
    grade: "304",
    material: "stainless steel",
    unitLength: "6-12 meter",
    shape: 'round'
  },
  {
    product:'Pipes',
    grade: "304",
    material: "stainless steel",
    unitLength: "6-12 meter",
    shape: 'round'
  },
  {
    product:'Pipes',
    grade: "304",
    material: "stainless steel",
    unitLength: "6-12 meter",
    shape: 'round'
  },
  {
    product:'Pipes',
    grade: "304",
    material: "stainless steel",
    unitLength: "6-12 meter",
    shape: 'round'
  },
  {
    product:'Pipes',
    grade: "304",
    material: "stainless steel",
    unitLength: "6-12 meter",
    shape: 'round'
  },
  {
    product:'Pipes',
    grade: "304",
    material: "stainless steel",
    unitLength: "6-12 meter",
    shape: 'round'
  },
  {
    product:'Pipes',
    grade: "304",
    material: "stainless steel",
    unitLength: "6-12 meter",
    shape: 'round'
  },
  {
    product:'Pipes',
    grade: "304",
    material: "stainless steel",
    unitLength: "6-12 meter",
    shape: 'round'
  },
  {
    product:'Pipes',
    grade: "304",
    material: "stainless steel",
    unitLength: "6-12 meter",
    shape: 'round'
  },
  {
    product:'Pipes',
    grade: "304",
    material: "stainless steel",
    unitLength: "6-12 meter",
    shape: 'round'
  },
  {
    product:'Pipes',
    grade: "304",
    material: "stainless steel",
    unitLength: "6-12 meter",
    shape: 'round'
  },
  {
    product:'Pipes',
    grade: "304",
    material: "stainless steel",
    unitLength: "6-12 meter",
    shape: 'round'
  },
]

const ProductsTable = () => {
  return (
    <TableContainer bg="white">
      <Table variant='simple'>
        <Thead bg='cyan.200'>
          <Tr>
            <Th>Products</Th>
            <Th>Action</Th>
            <Th>Product Details</Th>
            <Th>Price in Unit</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            data.map((item, i) =>(
              <Tr>
                <Td>{`${item.material} ${item.grade} ${item.product}`}</Td>
                <Td>
                  <Flex gap={2} color='teal'>
                    <Text pr='8px' borderRight='1px'>Quick Edit</Text>
                    <Text>Add Product Details</Text>
                  </Flex>
                </Td>
                <Td >
                  <Text>Material: {item.material}</Text>
                  <Text>Unit Length: {item.unitLength}</Text>
                  <Text>shape: {item.shape}</Text>
                </Td>
                <Td >350 / KG</Td>
              </Tr>
            ))
          }
          
          
        </Tbody>
      
      </Table>
    </TableContainer>
  )
}

export default ProductsTable