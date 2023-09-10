declare module '*.less' {
  interface IClassName{
    [className: string]: string
  }
  const resource: IClassName;
  export = resource;
}