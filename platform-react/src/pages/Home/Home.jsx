// para utilizar os elementos do bootstrap com react, precisa-se faze a importacao desse item(o botao abaixo) e usá-lo como classe <Button></Button>
// import {Button} from "react-bootstrap";

import { Link, Outlet } from "react-router-dom";

export function Home() {
    return (
        <div className="home">
            <h1>Home</h1>
            <ul>
                <li><Link to="/Section1">Section 1</Link></li>
                <li><Link to="/Section2">Section 2</Link></li>
                <li><Link to="/Section3">Section 3</Link></li>
            </ul>
            <Outlet />
        </div>
    )
}