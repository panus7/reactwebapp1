import React, { useState } from 'react'



const Navigation = () => {

    const [_show, setShow] = useState('')

    const handlerToggle = () => {
        console.log('toggle :', _show)
        if (!_show)
            setShow('show')
        else
            setShow('')
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">.js</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                    onClick={handlerToggle}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={'collapse navbar-collapse ' + _show} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Logout">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation