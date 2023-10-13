// React Imports
import {StyleSheet} from 'react-native';

// Util Imports
import {colors} from '../../utils/constans';

const styles = StyleSheet.create({
  headerWrapper: {
    width: '100%',
    height: 50,
    backgroundColor: colors.bgPrimary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.white,
  },
});

export default styles;
