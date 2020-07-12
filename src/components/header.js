import React from 'react'
import Nav from './navigation'

function Header() {
    return (
        <header className="border-b p-3 flex flex-row justify-between items-center" >
            <h1 className="font-bold">Appname</h1>

            <Nav />

        </header>
    )
}

export default Header