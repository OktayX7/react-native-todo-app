import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constans';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.textSecondary,
  },
  textWrapper: {
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    color: colors.textPrimary,
    fontSize: 25,
  },
  date: {
    color: colors.textPrimary,
    marginTop: 10,
  },

  iconWrapper: {
    flexDirection: 'row',
    gap: 15,
  },
  icon: {
    fontSize: 20,
  },
});

export default styles;
