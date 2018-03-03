// @flow
/* eslint-disable no-undef, flowtype/delimiter-dangle */




declare type Store = {
  
};

declare type History = {
  length: number,
  action: string,
  location: {
    pathname: string,
    search: string,
    hash: string,
    state: string,
  },
  push: (path: string) => void,
  replace: (path: s,tring) => void,
  go: (n: number) => void,
  goBack: () => void,
  goForward: () => void,
  block: (prompt: any) => void,
};
