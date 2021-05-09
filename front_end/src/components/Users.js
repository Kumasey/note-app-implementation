const Users = (props) => (
        <div className='user'>
            <img src={props.user.picture.large} alt={props.user.name.first}/>
            <p>{props.user.name.title} {props.user.name.first}{' '} 
            {props.user.name.last}
            </p>
        </div>
)

export default Users;