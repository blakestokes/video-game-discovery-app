import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
	gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
	const { data, error, isLoading } = useGames(gameQuery);
	const skeletons = Array.from({ length: 20 }, (_, index) => index + 1);

	if (error) return <Text>{error}</Text>;

	return (
		<SimpleGrid
			columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
			padding="10px"
			gap={6}
		>
			{isLoading &&
				skeletons.map((skeleton) => (
					<GameCardContainer key={skeleton}>
						<GameCardSkeleton />
					</GameCardContainer>
				))}

			{!isLoading &&
				data.map((data) => (
					<GameCardContainer key={data.id}>
						<GameCard game={data}></GameCard>
					</GameCardContainer>
				))}
		</SimpleGrid>
	);
};

export default GameGrid;
