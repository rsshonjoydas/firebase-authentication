import React from 'react';

const TextError = ({ children }: React.PropsWithChildren<{}>) => (
  <div className="text-red-400 pt-2">{children}</div>
);

export default TextError;
