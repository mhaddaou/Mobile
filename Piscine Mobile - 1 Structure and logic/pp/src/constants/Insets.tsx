
import { useSafeAreaInsets } from 'react-native-safe-area-context';
 function Insets(){
    const Insets = useSafeAreaInsets();
    return Insets;
}


const insets = Insets();
export {insets};