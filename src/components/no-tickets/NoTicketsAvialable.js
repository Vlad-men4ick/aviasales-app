import noTicketsClass from './NoTicketsAvialable.module.scss';
import { Alert } from 'antd';

function NoTicketsAvialable() {
  return (
    <div className={noTicketsClass.error}>
      <Alert message="No flights matching the specified filters were found" type="info" />
    </div>
  );
}
export default NoTicketsAvialable;
