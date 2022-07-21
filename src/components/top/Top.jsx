import s from './Top.module.sass'
import Header from "./header/Header";
import Suggestions from "./suggestions/Suggestions";

const Top = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.limiter}>
                <Header />
            </div>
            <Suggestions />
        </div>
    )
}

export default Top