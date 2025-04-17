import { Box, Grid, GridItem, HStack, Show, useBreakpointValue } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenres"
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./hooks/usePlatforms"
import SortSelector from "./components/SortSelector"
import GameHeading from "./components/GameHeading"

export interface GameQuery {
  genreId?: number,
  platformId?: number
  sortOrder: string,
  searchText: string
}

function App(){
  const [ gameQuery, setGameQuery ] = useState<GameQuery>({} as GameQuery)
  const isAboveMd = useBreakpointValue({ base: false, md: true })

  return(
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
    templateColumns={{
      base: "1fr",
      lg: "200px 1fr"
    }}
    
    >
      <GridItem area='nav' marginBottom={3}>
        <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/>
      </GridItem>
      <Show when={isAboveMd}>
        <GridItem area='aside' paddingX={5}>
          <GenreList onSelectGenre={(genre) => setGameQuery({...gameQuery, genreId: genre.id})} selectedGenreId={gameQuery.genreId}/>
        </GridItem>
      </Show>
      <GridItem area='main'>
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery}/>
          <HStack marginBottom={5}>
            <PlatformSelector selectedPlatformId={gameQuery.platformId} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platformId: platform.id})}/>
            <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  )
}

export default App
