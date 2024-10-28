import { Card, CardBody } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "./ui/skeleton";

const GameCardSkeleton = () => {
	return (
		<Card.Root>
			<Skeleton height="200px" />
			<CardBody>
				<SkeletonText />
			</CardBody>
		</Card.Root>
	);
};

export default GameCardSkeleton;
