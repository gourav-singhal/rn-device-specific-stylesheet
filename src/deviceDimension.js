/**
 * @flow
 */
import { width } from './device';

declare type DeviceTypes = {
    mobile?: any,
    tablet?: any,
}

const DeviceDimension = {
       select : function(styles: DeviceTypes): any {
        if(width >= 320 && width <= 480 && styles.mobile)
            return styles.mobile;
        else 
            return styles.tablet;
       }
   }

export default DeviceDimension;
