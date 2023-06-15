'use client'
import {Box, Text, Image, Flex, HStack} from "@chakra-ui/react"
import {StarIcon} from '@chakra-ui/icons';

import {MdShoppingCart} from "react-icons/md";
export default function ProductPage(props) {
    console.log(props)
    let product = props.product
    return (
        <Flex>
            <Box margin={'90px'} flex={1}>
                <Image src={product.image}/>
            </Box>
            <Box borderWidth={2} borderRadius={8}  maxH={400} margin={'90px'} padding={'5px'} flex={1}>
                <Text fontSize={'xl'} fontWeight={900}>{product.title}</Text>
                <Text>{product.description}</Text>
                <Text fontSize={36} padding={2}>{product.price}</Text>
                <Flex>
                    {Array(5)
                        .fill('')
                        .map((_, i) => (<StarIcon
                            marginTop={1}
                            key={i}
                            color={i < product.rating
                            ? 'teal.500'
                            : 'gray.300'}/>))}
                    <Text>{`(${product.raitingCount})`}</Text>
                </Flex>
                <Flex flexDir={'column'} alignItems='flex-start'>
                    <Flex
                        _hover={{
                        bg: '#A799B7'
                    }}
                        borderRadius={8}>
                        <Box paddingTop={3}>
                            <MdShoppingCart size={40}/>
                        </Box>
                        <Text fontSize={40}>Add To Cart</Text>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )
}