'use client'
import React from "react";
import Link from "next/link";
import { Badge, Box, Center, Image } from '@chakra-ui/react'


export default function Product(props) {
  const property = {
    imageUrl: props.product.image,
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: props.product.title,
    formattedPrice: props.product.price,
    reviewCount: 34,
    rating: 4,
  }

    return (
        <Link href={`catalog/${props.product.id}`}>
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' >
                <Image src={property.imageUrl} alt={property.imageAlt} boxSize={'350px'} objectFit={'cover'} h={'400px'} w={'400px'} padding={5} _hover={{transform:"scale(1.2,1.2)"}}/>
                <Box p='6'>
                    <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' colorScheme='teal'>
                            New
                        </Badge>
                    </Box>

                    <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1}>
                        {property.title}
                    </Box>

                    <Box>
                        {property.formattedPrice}
                        <Box as='span' color='gray.600' fontSize='sm'/>
                    </Box>

                    <Box display='flex' mt='2' alignItems='center'>

                        <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                            {property.reviewCount}
                            reviews
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Link>
    );
}