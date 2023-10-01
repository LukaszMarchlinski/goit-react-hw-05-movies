import { ThreeCircles } from 'react-loader-spinner';
import c from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={c.overlay}>
      <ThreeCircles
  ThreeCircles
  height="100"
  width="100"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor="orange"
  innerCircleColor="orangered"
  middleCircleColor="orange"
/>
    </div>
  );
};