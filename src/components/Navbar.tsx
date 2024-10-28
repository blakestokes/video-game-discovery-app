import { HStack, Image } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";

interface Props {
	onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
	return (
		<>
			<HStack padding="10px">
				<Image src={logo} boxSize="60px" />
				<SearchInput onSearch={onSearch} />
				<ColorModeButton />
			</HStack>
		</>
	);
};

export default Navbar;
