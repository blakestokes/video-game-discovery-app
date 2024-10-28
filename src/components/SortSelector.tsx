import {
	Button,
	MenuContent,
	MenuItem,
	MenuRoot,
	MenuTrigger,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
	onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ onSelectSortOrder }: Props) => {
	const sortOrders = [
		{ value: "", label: "Relevance" },
		{ value: "-added", label: "Date Added" },
		{ value: "name", label: "Name" },
		{ value: "-released", label: "Release Date" },
		{ value: "-metacritic", label: "Popularity" },
		{ value: "-rating", label: "Average Rating" },
	];

	return (
		<MenuRoot>
			<MenuTrigger asChild>
				<Button variant="outline" size="sm">
					Order By: Relevance <BsChevronDown />
				</Button>
			</MenuTrigger>
			<MenuContent position="absolute">
				{sortOrders.map((order, index) => (
					<MenuItem
						key={index}
						value={order.value}
						onClick={() => onSelectSortOrder(order.value)}
					>
						{order.label}
					</MenuItem>
				))}
			</MenuContent>
		</MenuRoot>
	);
};

export default SortSelector;
