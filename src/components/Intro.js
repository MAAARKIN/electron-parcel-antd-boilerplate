import React from 'react'
import { Button } from 'antd'

class Intro extends React.Component {

    render() {
        return (
            <div className='wrapper'>
                <h1 className='heading'>Welcome to Electron + Parcel + Antd !!</h1>
                <span>Build desktop applications with React and Electron.</span>
                <Button type="primary">Antd Button</Button>
            </div>
        )
    }
}

export default Intro