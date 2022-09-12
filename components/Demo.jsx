import { useState } from 'react'

const users = [
  {
    name: 'Alli',
    age: 16,
    updates: []
  },
  {
    name: 'Henry',
    age: 20,
    updates: [
      'Alli sent you a message'
    ]
  },
  {
    name: 'Luz',
    age: 22,
    updates: [
      'Henry sent you a message',
      'Alli sent you a message'
    ]
  }
]

export default function Demo () {
  const [user, setUser] = useState()
  return (
    <div className="grid grid-cols-2 gap-1">
      <div>
        <select
          onChange={(event) => setUser(users[event.target.value])}
          value={users.indexOf(user)}
        >
          <option>Select a user</option>
          {users.map((user, index) => (
            <option value={index} key={user.name}>
              {user.name} (age: {user.age})
            </option>
          ))}
        </select>
      </div>
      <div>
        <RestrictedContent check={() => user?.age < 18}>
          <Welcome
            name={`${user?.name} 👶`}
          />
        </RestrictedContent>
        <RestrictedContent check={() => user?.age >= 18 && user?.age <= 20}>
          <Welcome
            name={`${user?.name} 🧒`}
          />
        </RestrictedContent>
        <RestrictedContent check={() => user?.age > 20}>
          <WelcomeWithUpdates
            name={`${user?.name} 🧑`}
            updates={user?.updates}
          />
        </RestrictedContent>
      </div>
    </div>
  )
}

export function RestrictedContent({ check, children }) {
  if (check()) {
    return children
  } else {
    return null
  }
}

export function Welcome({ name }) {
  return (
    <div className="text-3xl">
      Welcome, {name}
    </div>
  )
}

export function WelcomeWithUpdates({ name, updates }) {
  const hasUpdates = updates.length
  return (
    <div className="text-3xl">
      Welcome, {name}
      {updates.length > 0 ? (
        <div className="text-lime-600 bg-lime-100">You have {updates.length} updates!</div>
      ) : null} 
    </div>
  )
}
