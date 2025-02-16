import profilePic from './assets/me.jpeg';

function Card() {
    return(
<div className="card">
    <img className="card-image" src={profilePic} alt="profile picture"></img>
    <h2 className="card-title">Deyana</h2>
    <p className="card-text"> I create art and craft</p>
</div>
    );
}

export default Card;