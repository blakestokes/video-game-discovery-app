// Come back to this

import {
	Button,
	MenuContent,
	MenuItem,
	MenuRoot,
	MenuTrigger,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
	onSelectPlatform: (platform: Platform) => void;
	selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
	const { data, error } = usePlatforms();

	if (error) return null;

	return (
		<MenuRoot>
			<MenuTrigger asChild>
				<Button variant="outline" size="sm">
					{selectedPlatform?.name || "Platforms"} <BsChevronDown />
				</Button>
			</MenuTrigger>
			<MenuContent position="absolute">
				{data.map((platform) => (
					<MenuItem
						key={platform.id}
						value={platform.slug}
						onClick={() => onSelectPlatform(platform)}
					>
						{platform.name}
					</MenuItem>
				))}
			</MenuContent>
		</MenuRoot>
	);
};

export default PlatformSelector;
