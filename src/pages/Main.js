import React from 'react'
import Center from './Center'
import Right from './Right'
import Toprepositories from './Toprepositories'

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
