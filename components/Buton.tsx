import {useContext} from "react";
import { TouchableOpacity, Text } from "react-native";
import { themeContext } from "../contes/ThemeContest";
import {Styles} from  "../styles/estilosGlobales";

interface ButtonProps {
    onPress: () => void;
    title: string;
    isBlue?: boolean;
    isGray?: boolean;
}
export default function Button({title, onPress, isBlue, isGray}: ButtonProps) {
    const theme = useContext(themeContext);
    return (
        <TouchableOpacity
        style={
            isBlue || isGray
            ? Styles.btnBlue
            : isGray
            ? Styles.btnGray
            : theme === "light"
            ? Styles.btnLight
            : Styles.btnDark
        }
        onPress={onPress}>
            <Text
             style={
                isBlue || isGray
                ? Styles.smallTextLight
                : theme === "dark"
                ? Styles.smallTextLight
                : Styles.smallTextDark
                
            }>
                {title}
            </Text>
        </TouchableOpacity>
    );
}