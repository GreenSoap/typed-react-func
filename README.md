# typed-react-func
A functional React component for Typed.js

## Installation

`npm i typed-react-func typed.js`

## Basic Example
```ts
import TypedComponent from 'typed-react-func'
const HelloWorldHeading = () => {
  return (
    <h1>
      <TypedComponent
        strings={['Hello', 'World']}
        loop={true}
        typeSpeed={50} 
        backSpeed={50}
        showCursor={true}
      />
    </h1>
  )
}
```
## Props

All Typed.js constructor options are passed as props to this component. You can find them by reading the 
<a href="http://mattboldt.github.io/typed.js/docs/" >documentation</a>

## Extended props
| Prop | Type | Description |
|---------|---------|---------|
| className  | string | Adds a className to the container, default is `typewriter`     |
| isStopped | boolean | Initializes the component without starting typing  |
| hideCursorBeforeStart | boolean | Hides the cursor before the typing begins (only if showCursor is set to true)      |

## Example with following cursor (with multiple instances)
```ts
import { useRef } from 'react'
import TypedComponent from 'typed-react-func'
import Typed from 'typed.js'
const HelloWorldHeading = () => {
  const h2Ref = useRef<Typed | null>(null)
  return (
    <header>
      <h1>
        <TypedComponent 
          strings={['Hello World']} 
          showCursor={true}
          loop={false}
          onComplete={(self) => { 
            // Start h2 when this 'Hello World' text has been written
            const cursor = (self as any).cursor
            const h2 = h2Ref.current
            if (cursor && h2) {
              cursor.remove()
              h2.start()
            }
          }}
          />
      </h1>
      <h2>
        <TypedComponent 
          strings={['My name is William']} 
          ref={h2Ref}
          showCursor={true}
          hideCursorBeforeStart={true}
          isStopped={true}
          onStart={(self) => { 
            // Show the cursor when the typing starts
            const cursor = (self as any).cursor
            if (cursor) 
              cursor.style.opacity = '1'
          }}
          loop={false} 
          />
      </h2>
    </header>
  )
}
```