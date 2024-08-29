import {Colors} from '../../constants/colors';
import Icons from './Icon';

export const IconName = {
  CheckCircle: 'checkcircle',
};

export const SearchIcon = ({size = 18, Color = '#fff'}) => {
  return <Icons.Feather name={'search'} color={Color} size={size} />;
};

export const RightIcon = () => {
  return <Icons.Entypo name={'chevron-small-right'} size={25} />;
};
export const PlusIcon = () => {
  return <Icons.Entypo name={'plus'} size={20} color={Colors.Orange} />;
};
export const DownIcon = () => {
  return (
    <Icons.FontAwesome name={'sort-down'} size={20} color={Colors.Black} />
  );
};

export const CloseIcon = () => {
  return <Icons.MaterialIcons name={'close'} size={20} color={Colors.Black} />;
};
export const ThreeDotIcon = () => {
  return (
    <Icons.Entypo name={'dots-three-horizontal'} size={20} color="#181C2E" />
  );
};
