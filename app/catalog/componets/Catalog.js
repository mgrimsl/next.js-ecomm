'use client'
import React from 'react'
import {
    Flex,
    Stack,
    Grid,
    Checkbox,
    GridItem,
    CheckboxGroup,
    useCheckboxGroup,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'
import { usePathname, useRouter, useSearchParams} from 'next/navigation'
import Product from './Product'
import { URLSearchParams } from 'next/dist/compiled/@edge-runtime/primitives/url'

function cap(str) {
    const arr = str.split(" ");

    //loop through each element of the array and capitalize the first letter.

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i]
            .charAt(0)
            .toUpperCase() + arr[i].slice(1);

    }

    // Join all the elements of the array back into a string using a blankspace as a
    // separator
    const str2 = arr.join(" ");
    return str2
}


export default function Catalog(props) {
    const arr = new Array(props.categories.length).fill(false)
    const [checkedItems, setCheckedItems] = React.useState(arr)
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const createQueryString = (name, value)=>{
        const params = new URLSearchParams(searchParams)
        params.append(name,value)

        return params.toString()
    }

    const removeQuery = (name, val)=>{
        const params = new URLSearchParams(searchParams)
        const newParams = new URLSearchParams()

        for (const [key, value] of params.entries()) {
            if(key!=name || value != val){
                newParams.append(key,value)
            }
        }
   
        return newParams.toString()
    }
 

    return (
        <Flex color='white'>
            <Flex flex='1' flexDir={'column'} bg='green.500' padding={5}>
                <Accordion>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Filters
                                </Box>
                                <AccordionIcon/>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Stack>
                                <CheckboxGroup>
                                {
                                    
                                    props.categories.map((x,index) => 
                                    <Checkbox key={x} isChecked={checkedItems[index]} onChange={(e) => {
                                        setCheckedItems(arr[index]=e.target.checked)
                                        if(e.target.checked){
                                            router.push(`${pathname}?${createQueryString("category",x)}`)
                                        }else{
                                            router.push(`${pathname}?${removeQuery("category",x)}`)
                                        }
                                    }} >
                                    {cap(x)}
                                    </Checkbox>)
                                    
                                }
                                </CheckboxGroup>
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

            </Flex>
            <Grid flex='4' templateColumns='repeat(4, 1fr)'>
                {props.products.map(x => (
                        <GridItem key={x.id}>
                            <Product product={x}></Product>
                        </GridItem>
                    ))
}
            </Grid>
        </Flex>
    )
}