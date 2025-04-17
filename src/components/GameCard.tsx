import { Game } from '../hooks/useGames'
import { Card, HStack, Heading, Image } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImgUrl from '../services/image-url'

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
        <Image src={getCroppedImgUrl(game.background_image)}/>
        <Card.Body display={'flex-column'}>
            <HStack justifyContent='space-between' marginBottom={3}>
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
                <CriticScore score={game.metacritic}/>
            </HStack>
            <Heading fontSize='2xl'>{game.name}</Heading>
        </Card.Body>
        <Card.Footer></Card.Footer>
    </Card.Root>
  )
}

export default GameCard