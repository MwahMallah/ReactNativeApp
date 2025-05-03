import { Text as NativeText, StyleProp, StyleSheet, TextStyle } from 'react-native';

import theme from '../../theme';

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal,
    },
    colorTextSecondary: {
        color: theme.colors.textSecondary,
    },
    colorPrimary: {
        color: theme.colors.primary,
    },
    colorHeader: {
        color: theme.colors.textHeader,
    },
    fontSizeSubheading: {
        fontSize: theme.fontSizes.subheading,
    },
    fontWeightBold: {
        fontWeight: theme.fontWeights.bold,
    },
});

const Text = ({ color, fontSize, fontWeight, style, ...props }: TextProps) => {
    const textStyle = [
        styles.text,
        color === 'textSecondary' && styles.colorTextSecondary,
        color === 'primary' && styles.colorPrimary,
        color === 'header' && styles.colorHeader,
        fontSize === 'subheading' && styles.fontSizeSubheading,
        fontWeight === 'bold' && styles.fontWeightBold,
        style,
    ];

    return <NativeText style={textStyle} {...props} />;
};

interface TextProps extends React.ComponentProps<typeof NativeText> {
    color?: 'textSecondary' | 'primary' | 'header', 
    fontSize?: 'primary' | 'subheading', 
    fontWeight?: 'bold', 
    style?: StyleProp<TextStyle>
};

export default Text;