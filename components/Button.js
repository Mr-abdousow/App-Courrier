import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import COLORS from '../constants/colors'

const Button = (props) => {
    const filledBgColor = props.color || COLORS.primary;
    const outlinedColor = COLORS.white;
    const bgColor = props.filled ? filledBgColor : outlinedColor
    const textColor = props.filled ? COLORS.white : COLORS.primary
  return (
    <TouchableOpacity style={{...styles.button, ...{backgroundColor:bgColor}, ...props.title }} onPress={props.onPress}>
        <Text style={{fontSize : 18, ...{color : textColor}}}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button : {
        paddingBottom : 16,
        paddingVertical : 10,
        borderColor : COLORS.primary,
        borderWidth : 2,
        borderRadius : 15,
        alignItems : 'center',
        justifyContent : 'center',
        marginTop : 22
    }
})