import { classNames } from 'shared/lib/className/classNames';
import stl from './PageError.module.less'

export const PageError = () => {
  const reload = ()=>{
    location.reload()
  }

  const gohome = ()=>{
    window.open(location.origin, "_self")
  }

  return (
    <div className={classNames(stl.PageError)}>
      <h1>OOOPS</h1>
      <button onClick={reload}>Reload Page</button>
      <button onClick={gohome}>home</button>
    </div>
  );
};