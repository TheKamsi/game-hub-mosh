import usePlatform from '@/hooks/usePlatform'
import useGameQueryStore from '@/store/GameQueryStore'
import { Button, Menu, Portal } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'

const PlatformSelector = () => {
  const { data, error } = usePlatforms()
  const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId)
  const setSelectedPlatformId = useGameQueryStore(s => s.setPlatformId)
  const selectedPlatform = usePlatform(selectedPlatformId) 

  if (error) return null

  return (
    <Menu.Root>
        <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          { selectedPlatform?.name || "Platforms"}
          <BsChevronDown/>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data?.results.map(platform => <Menu.Item key={platform.id} value={platform.name} onClick={() => setSelectedPlatformId(platform.id)}>{platform.name}</Menu.Item> )}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export default PlatformSelector