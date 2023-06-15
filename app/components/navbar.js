'use client'
import React from "react";
import Link from "next/link";
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Avatar,
    useColorModeValue,
    useDisclosure,
    HStack,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    AddIcon,
  } from '@chakra-ui/icons';
  const Links = [{title:'Products', link:'catalog'}];

  const NavLink = ({ children }) => (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
      }}
      href={'#'}>
      {children}
    </Link>
  );
  
  export default function withAction() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <>
        <Box bg={useColorModeValue('#4f646f')} px={4}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
            <Link href="">
                <Box>Logo</Box>
              </Link>
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                  <Link key={link} href={`${link.link}`}>{link.title}</Link>
                ))}
              </HStack>
            </HStack>
            <Flex alignItems={'center'}>
              <Button
                variant={'solid'}
                colorScheme={'teal'}
                size={'sm'}
                mr={4}
                leftIcon={<AddIcon />}>
                Action
              </Button>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={
                      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                    }
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>Link 1</MenuItem>
                  <MenuItem>Link 2</MenuItem>
                  <MenuDivider />
                  <MenuItem>Link 3</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
  
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
  
      </>
    );
  }