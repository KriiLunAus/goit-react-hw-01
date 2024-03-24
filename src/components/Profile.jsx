import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <>
      <div className={css.wrapper}>
        <img className={css.profileImage} src={image} alt="profile image" />
        <p className={css.name}>
          {name}
        </p>
        <p className={css.tag}>
          @{tag}
        </p>
        <p className={css.location}>
          {location}
        </p>
          <ul className={css.stats}>
          <li>Followers { stats.followers }</li>
          <li>Views { stats.views }</li>
          <li>Likes { stats.likes }</li>
        </ul>
        
      </div>
    </>
  )
};


export default Profile;