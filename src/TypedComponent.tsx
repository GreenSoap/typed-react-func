import React = require('react');
import { useEffect, useRef, forwardRef } from 'react'
import Typed from 'typed.js'
import { TypedComponentProps } from '.';

const TypedComponent = forwardRef<Typed, TypedComponentProps>((props, ref?) => {
  const containerRef = useRef<HTMLSpanElement>(null);
    
  useEffect(() => {
    const container = containerRef.current
    if (!container) return    

    const typed = new Typed(container, { ...props })
    const isStopped = (props.isStopped == true)
    const hasForwardedRef = (ref && typeof ref !== 'function')

    if (hasForwardedRef)
      ref.current = typed
    
    if (isStopped)
      typed.stop()

    if (props.hideCursorBeforeStart){
      const cursor = (typed as any).cursor as HTMLSpanElement
      cursor.setAttribute('style', 'opacity: 0')
    }

    return () => typed.destroy()
  }, [props, ref])

  return (<span 
      ref={containerRef}
      className={props.className ? props.className : 'typewriter'}  
    />)
});

TypedComponent.displayName = 'Typed'

export default TypedComponent;