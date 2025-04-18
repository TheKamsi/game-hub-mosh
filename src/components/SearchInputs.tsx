import useGameQueryStore from '@/store/GameQueryStore'
import { Input, InputGroup } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'


const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null)
  const setSearchText = useGameQueryStore(s => s.setSearchText)

  return (
    <form onSubmit={(event) => {
        event.preventDefault()
        if(ref.current) setSearchText(ref.current.value)

    }}>
        <InputGroup startElement={<BsSearch />}>
            <Input
                borderRadius={20}
                placeholder="Search games..."
                variant="subtle"
                backgroundColor="gray.100"
                ref={ref}
                 />
        </InputGroup>
    </form>
  )
}

export default SearchInput