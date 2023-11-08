import { classNames } from 'shared/lib/className/classNames';
import cls from './404.module.less'

export const NotFound = () => {
  return (
    <div className={classNames(cls['not-found'])}>
      404
    </div>
  );
};