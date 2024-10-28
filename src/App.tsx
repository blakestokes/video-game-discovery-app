import { Grid, GridItem, Box, Flex } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string;
	searchText: string;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	return (
		<>
			<Grid
				templateAreas={{
					base: `"nav" "main"`,
					lg: `"nav nav" "aside main"`, // wider than 1024px
				}}
				templateColumns={{
					base: "1fr",
					lg: "250px 1fr",
				}}
			>
				<GridItem area="nav">
					<Navbar
						onSearch={(searchText) =>
							setGameQuery({ ...gameQuery, searchText })
						}
					/>
				</GridItem>
				<GridItem
					area="aside"
					display={{ base: "none", lg: "block" }}
					paddingX={5}
				>
					<GenreList
						selectedGenre={gameQuery.genre}
						onSelectGenre={(genre) =>
							setGameQuery({ ...gameQuery, genre })
						}
					/>
				</GridItem>
				<GridItem area="main">
					<Box paddingLeft={2}>
						<GameHeading gameQuery={gameQuery} />
						<Flex marginBottom={5}>
							<Box marginRight={5}>
								<PlatformSelector
									selectedPlatform={gameQuery.platform}
									onSelectPlatform={(platform) =>
										setGameQuery({ ...gameQuery, platform })
									}
								/>
							</Box>
							<Box>
								<SortSelector
									onSelectSortOrder={(sortOrder) =>
										setGameQuery({
											...gameQuery,
											sortOrder,
										})
									}
								/>
							</Box>
						</Flex>
					</Box>
					<GameGrid gameQuery={gameQuery} />
				</GridItem>
			</Grid>
		</>
	);
}

export default App;
