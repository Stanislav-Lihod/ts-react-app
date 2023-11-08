import { classNames } from 'shared/lib/className/classNames';
import stl from './Loader.module.less'

export const Loader = () => {
  return (
    <div className={classNames(stl.wrapper)}>
      <div className={classNames(stl.ball)}></div>
      <div className={classNames(stl.ball)}></div>
      <div className={classNames(stl.ball)}></div>

      <svg>
        <defs>
          <filter id="filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -10" result="filter" />
            <feComposite in="SourceGraphic" in2="filter" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};