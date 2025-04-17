import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/twitter.png'
import SearchInput from './SearchInputs'

interface Props {
  onSearch: (searchText: string) => void
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack marginTop={3}>
        <Image src={logo} boxSize='30px'></Image>
        <SearchInput onSearch={onSearch}/>
    </HStack>
  )
}

export default NavBar