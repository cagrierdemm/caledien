import React from 'react'

import { Button, DownloadButton, CancelButton } from 'caledien'
import 'caledien/dist/index.css'

const App = () => {
  return (
    <>
    <Button type="white" text="White Button"/>
    <Button type="black" text="Black Button"/>
    <Button type="blue" text="Blue Button"/>
    <Button type="yellow" text="Yellow Button"/>
    <Button type="red" text="Red Button"/>
    <Button type="green" text="Green Button"/>
    <Button type="purple" text="Purple Button"/>
    <Button type="dashed" text="Dashed Button"/>
    <Button type="text" text="Text Button"/>
    <Button type="link" text="Link Button"/>
    <DownloadButton text="Download"/>
    <CancelButton text="Cancel"/>
    </>
  )
}

export default App
