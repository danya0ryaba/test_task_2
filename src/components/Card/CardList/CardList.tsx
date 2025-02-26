import style from './CardList.module.scss'

export const CardList = () => {
    return (
        <div className={style.open_card}>

            <div className={style.open_card_item}>

                <ul className={style.users}>

                    <li className={style.user}>

                        <span className={style.user_name}>
                            <img src="../../../public/user.png" alt="avatar" />
                            <h6 className={style.name}>User 1</h6>
                        </span>

                        <span className={style.user_name}>
                            <i className={style.kill}>Убийств:</i>
                            <h6 className={style.count}>4</h6>
                        </span>

                    </li>

                    <li className={style.user}>

                        <span className={style.user_name}>
                            <img src="../../../public/user.png" alt="avatar" />
                            <h6 className={style.name}>User 1</h6>
                        </span>

                        <span className={style.user_name}>
                            <i className={style.kill}>Убийств:</i>
                            <h6 className={style.count}>4</h6>
                        </span>

                    </li>

                    <li className={style.user}>

                        <span className={style.user_name}>
                            <img src="../../../public/user.png" alt="avatar" />
                            <h6 className={style.name}>User 1</h6>
                        </span>

                        <span className={style.user_name}>
                            <i className={style.kill}>Убийств:</i>
                            <h6 className={style.count}>4</h6>
                        </span>

                    </li>

                </ul>

                <ul className={style.info}>
                    <li className={style.info_item}>
                        <span className={style.info_item_key}>Points: </span>
                        <span className={style.info_item_value}>+50</span>
                    </li>
                    <li className={style.info_item}>
                        <span className={style.info_item_key}>Points: </span>
                        <span className={style.info_item_value}>+50</span>
                    </li>
                    <li className={style.info_item}>
                        <span className={style.info_item_key}>Points: </span>
                        <span className={style.info_item_value}>+50</span>
                    </li>
                </ul>

            </div>

            <div className={style.open_card_item}>

                <ul className={style.users}>

                    <li className={style.user}>

                        <span className={style.user_name}>
                            <img src="../../../public/user.png" alt="avatar" />
                            <h6 className={style.name}>User 1</h6>
                        </span>

                        <span className={style.user_name}>
                            <i className={style.kill}>Убийств:</i>
                            <h6 className={style.count}>4</h6>
                        </span>

                    </li>

                    <li className={style.user}>

                        <span className={style.user_name}>
                            <img src="../../../public/user.png" alt="avatar" />
                            <h6 className={style.name}>User 1</h6>
                        </span>

                        <span className={style.user_name}>
                            <i className={style.kill}>Убийств:</i>
                            <h6 className={style.count}>4</h6>
                        </span>

                    </li>

                    <li className={style.user}>

                        <span className={style.user_name}>
                            <img src="../../../public/user.png" alt="avatar" />
                            <h6 className={style.name}>User 1</h6>
                        </span>

                        <span className={style.user_name}>
                            <i className={style.kill}>Убийств:</i>
                            <h6 className={style.count}>4</h6>
                        </span>

                    </li>

                </ul>

                <ul className={style.info}>
                    <li className={style.info_item}>
                        <span className={style.info_item_key}>Points: </span>
                        <span className={style.info_item_value}>+50</span>
                    </li>
                    <li className={style.info_item}>
                        <span className={style.info_item_key}>Points: </span>
                        <span className={style.info_item_value}>+50</span>
                    </li>
                    <li className={style.info_item}>
                        <span className={style.info_item_key}>Points: </span>
                        <span className={style.info_item_value}>+50</span>
                    </li>
                </ul>

            </div>


        </div>
    )
}
