import React, {FC, useRef, useState} from 'react';
import {MyComponent} from './MyComponent';

type Props = {};

export const Hello: FC<Props> = ({}) => {
  const ref = useRef<HTMLDivElement | null>(null)

  const [html, setHtml] = useState<string>()

  function getHtml() {
    setHtml(ref.current?.outerHTML ?? '')
  }

  return <div>
    <MyComponent ref={ref} defaultValue={'react'}/>
    <button onClick={() => getHtml()}>Get Html</button>
    <hr/>
    {html}
  </div>;
}
