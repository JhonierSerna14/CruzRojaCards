import { useState } from 'react'
import './App.css'
import Header from './components/Header.js'
import MemberGrid from './components/MemberGrid.js'
import SearchBar from './components/SearchBar.js'
import type { Member } from './types/Member.js'
import { membersData } from './data/members.js'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRole, setSelectedRole] = useState('')

  const filteredMembers = membersData.filter((member: Member) => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = selectedRole === '' || member.role === selectedRole
    return matchesSearch && matchesRole
  })

  const uniqueRoles = [...new Set(membersData.map((member: Member) => member.role))]

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <SearchBar 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
          roles={uniqueRoles}
        />
        <MemberGrid members={filteredMembers} />
      </main>
    </div>
  )
}

export default App
