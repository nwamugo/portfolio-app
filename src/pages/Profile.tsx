import { useEffect, useState } from "react";

import './Profile.css'
import Link from "../components/Link";
import List from "../components/List";

import { IProfile } from "../model/profile";

function Profile({ userName }: {userName: string}) {
  const [ loading, setLoading ] = useState(true);
  const [ profile, setProfile ] = useState<IProfile>({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.github.com/users/${userName}`
      )
      const result = await response.json();
      if (result) {
        setProfile(result)
        setLoading(false)
      }
    }
    fetchData()
  }, [userName])

  const items = [
    {
      field: 'html_url',
      value: <Link url={profile.html_url} title={profile.html_url} />,
    },
    {
      field: 'repos_url',
      value: <Link url={profile.repos_url} title={profile.repos_url} />,
    },
    { field: 'name', value: profile.name },
    { field: 'company', value: profile.company },
    { field: 'location', value: profile.location },
    { field: 'email', value: profile.email },
    { field: 'bio', value: profile.bio },

  ]

  return (
    <div className="Profile-container">
      <h2>About me</h2>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div>
          <img
            className="Profile-avatar"
            src={profile.avatar_url}
            alt={profile.name}
          />
          <List items={items} />
        </div>
      )}
    </div>
  )
}

export default Profile