import { Outlet } from "react-router-dom";

export function Section2() {
    return (
        <div>
            <ul>
                <h2><li>Section 2</li></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aliquid doloribus atque molestiae ea maiores, molestias ad ducimus repellat, obcaecati deserunt consectetur. Fuga aperiam dolores sit mollitia impedit dolor in.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aliquid doloribus atque molestiae ea maiores, molestias ad ducimus repellat, obcaecati deserunt consectetur. Fuga aperiam dolores sit mollitia impedit dolor in.</p>
            </ul>
            <Outlet />
        </div>
    )
}