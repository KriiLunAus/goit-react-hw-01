import css from "./FriendListItem.module.css"

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


export default FriendListItem;