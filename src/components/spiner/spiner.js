import spiner from './spiner.module.scss';
import { Spin } from 'antd';

function Spinner() {
  return (
    <div className={spiner}>
      <Spin />
    </div>
  );
}
export default Spinner;
