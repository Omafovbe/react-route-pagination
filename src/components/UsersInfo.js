const UsersInfo = (props) => {
  const { data } = props
  return (
    <div>
      {data.map((user) => {
        return (
            <div className="card" key={user.login.uuid}>
                
                <img className="profileImg" src={user.picture.medium} alt={user.login.username} loading="lazy" />
                
                <div className="desc">
                    <p key={user.login.uuid}>
                        {user.name.title} {user.name.first} {user.name.last} <br />
                        {user.location.street.number} {user.location.street.name}, {user.location.city}<br />
                        {user.location.state}, {user.location.country} <br />
                        <span className="user__email">{ user.email }</span>
                    </p>
                    
                </div>
            
          </div>
        )
      })}
    </div>
  )
}

export default UsersInfo
