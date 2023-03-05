import React from 'react'
import Center from './Main-Center'
import Right from './Main-Right'
import Toprepositories from './Main-Left'

function Main() {
    return (
        <div className='container-fluid'>
            <div className="row">
                <Toprepositories />
                <Center />
                <Right/>
            </div>
        </div>
    )
}

export default Main
