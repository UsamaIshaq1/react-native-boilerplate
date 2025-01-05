import { StyleSheet, ViewStyle } from 'react-native';
import { AppColors } from '~utils';
import { width } from '~utils/dimensions';

interface AvatarStyles {
  container: ViewStyle;
  primaryContainer: ViewStyle;
  secondaryContainer: ViewStyle;
  editButton: ViewStyle;
}

const styles = StyleSheet.create<AvatarStyles>({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width(10),
    borderColor: AppColors.white,
    backgroundColor: AppColors.snowWhite,
  },
  primaryContainer: {
    borderWidth: 0,
  },
  secondaryContainer: {
    borderWidth: width(4),
    borderColor: AppColors.primary,
  },
  editButton: {
    position: 'absolute',
  },
});

export default styles;
