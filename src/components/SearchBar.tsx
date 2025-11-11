import './SearchBar.css'

interface SearchBarProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  selectedRole: string
  setSelectedRole: (role: string) => void
  roles: string[]
}

const SearchBar = ({ searchTerm, setSearchTerm, selectedRole, setSelectedRole, roles }: SearchBarProps) => {
  return (
    <div className="search-container">
      <div className="search-bar">
        <div className="search-input-group">
          <input
            type="text"
            placeholder="Buscar por nombre o cargo..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <div className="search-icon">🔍</div>
        </div>
        
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="role-filter"
        >
          <option value="">Todos los cargos</option>
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default SearchBar