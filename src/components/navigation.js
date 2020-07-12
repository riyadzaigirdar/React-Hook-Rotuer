import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTransition, animated } from 'react-spring'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import NavigationMenu from './navagationMenu'

function Nav() {

    const [showMenu, setShowMenu] = useState(false)
    const menuTransition = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translate(-100%)' },
        enter: { opacity: 1, transform: 'translate(0%)' },
        leave: { opacity: 0, transform: 'translate(-100%)' },
    })

    const menuBackgroundTransition = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translate(100%)' },
        enter: { opacity: 1, transform: 'translate(80%)' },
        leave: { opacity: 0, transform: 'translate(100%)' },
    })


    return (
        <nav>
            <span className="text-xl" onClick={() => { setShowMenu(!showMenu) }}>
                <FontAwesomeIcon icon={faBars} />
            </span>

            {menuTransition.map(({ item, key, props }) =>
                item && <animated.div
                    key={key}
                    style={props}
                    className="fixed top-0 left-0 w-4/5 h-full bg-black text-white z-50 p-5"
                >
                    <span className="font-bold text">My Menu</span>
                    <NavigationMenu closeMenu={() => setShowMenu(false)} />
                </animated.div>
            )}

            {menuBackgroundTransition.map(({ item, key, props }) =>
                item && <animated.div
                    key={key}
                    style={props}
                    className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-25 z-50"
                    onClick={() => { setShowMenu(false) }}
                >

                </animated.div>
            )}

        </nav>
    )
}

export default Nav