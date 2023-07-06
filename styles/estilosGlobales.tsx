import { StyleSheet } from "react-native";
import { colores } from "./colors";

export const Styles = StyleSheet.create({
    //botones
    btnBlue: {
        width: 72, 
        height: 72,
        borderRadius: 24,
        backgroundColor: colores.blue,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnDark: {
        width: 72, 
        height: 72,
        borderRadius: 24,
        backgroundColor: colores.btnDark,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnLight: {
        width: 72, 
        height: 72,
        borderRadius: 24,
        backgroundColor: colores.white,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnGray: {
        width: 72, 
        height: 72,
        borderRadius: 24,
        backgroundColor: colores.btnGray,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    smallTextLight: {
        fontSize: 32,
        color: colores.white
    },
    smallTextDark: {
        fontSize: 32,
        color: colores.black
    },
    //teclado
    row : {
        maxWidth: '100%',
        flexDirection: "row"
    },
    viewBottom: {
        marginTop: 20,
        position: 'absolute',
        bottom: 50,
    },
    screenFirstNumber: {
        fontSize: 96,
        color: colores.gray,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
    screenSecondNumber: {
        fontSize: 40,
        color: colores.gray,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
});