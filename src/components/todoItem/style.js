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
    gap: 10,
  },
  text: {
    fontWeight: 'bold',
    color: colors.textPrimary,
    fontSize: 25,
  },
  dateWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  date: {
    color: colors.textPrimary,
  },

  completedText: {
    color: colors.green,
    fontWeight: 'bold',
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
