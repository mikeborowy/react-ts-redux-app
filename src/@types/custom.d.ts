/* eslint-disable */

declare interface NodeModule {
  [key:string]:any
}

declare interface Window {
  [key:string]:any
}

declare module '*inline.svg' {
  const content: any;
  export default content;
}

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

declare module '*.json' {
  const value: any;
  export default value;
}
/* eslint-enable */
