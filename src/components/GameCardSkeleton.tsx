import { Skeleton, Card, SkeletonText} from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card.Root>
        <Skeleton height="200px" width="100%" />
        <Card.Body>
         <SkeletonText /> 
        </Card.Body>
    </Card.Root>
  )
}

export default GameCardSkeleton