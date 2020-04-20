import React from 'react';

function UserProfil(props) {
  const params = props.match.params;
  return (
      <div>
        <h2>Login: <em>{params.githubLogin}</em></h2>
      </div>
  );
}

export default UserProfil;
