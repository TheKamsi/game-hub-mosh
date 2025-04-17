import { Platform } from '@/hooks/usePlatforms'
import { Button, Menu, Portal } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'

interface Props {
  onSelectPlatform: (platform: Platform) => void,
  selectedPlatformId?: number
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId } : Props) => {
  const { data, error } = usePlatforms()
  const selectedPlatform = data?.results.find(p => p.id === selectedPlatformId)

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
            {data?.results.map(platform => <Menu.Item key={platform.id} value={platform.name} onClick={() => onSelectPlatform(platform)}>{platform.name}</Menu.Item> )}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export default PlatformSelector