import { TextStyle } from 'react-native';

const theme = {
    colors: {
        textPrimary: '#24292e',
        textSecondary: '#586069',
        primary: '#0366d6',
        bgHeader: '#24292e',
        textHeader: '#fff',
        bgRepositoryItem: 'white',
        bgMain: '#e1e4e8',
        bgLanguage: '#0366d6'
    },
    fontSizes: {
        body: 14,
        subheading: 16,
    },
    fonts: {
        main: 'System',
    },
    fontWeights: {
        normal: '400' as TextStyle["fontWeight"],
        bold: '700' as TextStyle["fontWeight"],
    },
    margins: {
        centeredLeft: 20,
        top: 20
    },
    image: {
        size: 50,
        borderRadius: 10
    }
};

export default theme;