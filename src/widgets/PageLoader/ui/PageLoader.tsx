import { classNames } from 'shared/lib/className/classNames';
import stl from './PageLoader.module.less';
import { Loader } from 'shared/ui/Loader/Loader';

export const PageLoader = () => {
  return (
    <div className={classNames(stl.PageLoader)}>
      <Loader/>
    </div>
  );
};