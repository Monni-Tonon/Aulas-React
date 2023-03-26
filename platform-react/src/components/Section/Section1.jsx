import { Outlet } from "react-router-dom";

export function Section1() {
    return (
        <div className="sessoes">
            <ul>
                <h2><li>Section 1</li></h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum qui iste esse fugiat rem nisi ullam, error eius quaerat ea quis! Quae veniam consectetur obcaecati necessitatibus earum, deleniti recusandae in.</p>
            </ul>
            <Outlet />
        </div>
    )
}