import style from './Dashboard.module.css'
import { Aside } from '../../aside'
import { Outlet } from 'react-router'

function Dashboard() {
    return (
        <div className={style.container}>
            <Aside />
            <main>
                <div>
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default Dashboard
