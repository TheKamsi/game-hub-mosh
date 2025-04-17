import { HStack, List, Image, Spinner, Button, Heading } from '@chakra-ui/react'
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImgUrl from '../services/image-url'

interface Props {
  onSelectGenre: (genre: Genre) => void,
  selectedGenre: Genre | null
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres()

  if (error) return null

  if (isLoading) return <Spinner/>

  return (
   <>
     <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
    <List.Root listStyle="none">
      {data?.results.map(genre => (<List.Item key={genre.id} paddingY="5px">
        <HStack>
          <Image 
            boxSize="32px" 
            borderRadius={4}
            objectFit='cover'
            src={getCroppedImgUrl(genre.image_background)}
          />
          <Button whiteSpace="normal" textAlign="left" fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} fontSize="lg" variant="ghost">{genre.name}</Button>
        </HStack>
        </List.Item> ))}
    </List.Root>
   </>
  )
}

export default GenreList