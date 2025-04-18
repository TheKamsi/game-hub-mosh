import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/twitter.png'
import SearchInput from './SearchInputs'



const NavBar = () => {
  return (
    <HStack marginTop={3}>
        <Image src={logo} boxSize='30px'></Image>
        <SearchInput />
    </HStack>
  )
}

export default NavBar