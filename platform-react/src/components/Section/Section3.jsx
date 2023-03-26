import { Outlet } from "react-router-dom";

export function Section3() {
    return (
        <div>
            <ul>
                <h2><li>Section 3</li></h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum qui iste esse fugiat rem nisi ullam, error eius quaerat ea quis! Quae veniam consectetur obcaecati necessitatibus earum, deleniti recusandae in.</p>
            </ul>
            <Outlet />
        </div>
    )
}