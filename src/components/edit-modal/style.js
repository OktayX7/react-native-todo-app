import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constans';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: colors.modalBg,
  },
  modalContentWrapper: {
    backgroundColor: colors.white,
    width: '80%',
    height: '25%',
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    alignItems: 'center',
    borderRadius: 10,
    gap: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.textPrimary,
  },

  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  buttonText: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  cancelBtn: {
    color: colors.danger,
    borderWidth: 1,
    borderColor: colors.danger,
    borderRadius: 10,
  },
  confirmBtn: {
    color: colors.green,
    borderWidth: 1,
    borderColor: colors.green,
    borderRadius: 10,
  },
});

export default styles;
