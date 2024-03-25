import css from "./FriendList.module.css"

const colorOfElement = (isOnline => {
    if (isOnline) {
        return css.green;
    } else {
        return  css.red ;
   }
})

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
    <div className={css.listElementInnerWrapper}>
        <img src={ avatar} alt="Avatar" width="48" />
        <p>{ name }</p>
        <p className={colorOfElement(isOnline)}>{ isOnline ? "Online" : "Offline"}</p>
    </div>)
}


const FriendList = ({ friends }) => {
    return (
        <>
            <ul className={css.list}>
                {friends.map(friend => (
                 <li className={css.listElement} key={friend.id}>
                        <FriendListItem
                    avatar ={friend.avatar}    
                    name = {friend.name}
                    isOnline = {friend.isOnline}
                        />
                </li>
        ))}
            </ul>
        </>
        )
    }


export default FriendList;