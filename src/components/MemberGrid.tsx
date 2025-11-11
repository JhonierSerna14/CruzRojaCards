import { useState } from 'react'
import type { Member } from '../types/Member.js'
import MemberCard from './MemberCard.js'
import MemberModal from './MemberModal.js'
import './MemberGrid.css'

interface MemberGridProps {
  members: Member[]
}

const MemberGrid = ({ members }: MemberGridProps) => {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null)

  const handleCardClick = (member: Member) => {
    setSelectedMember(member)
  }

  const closeModal = () => {
    setSelectedMember(null)
  }

  return (
    <>
      <div className="member-grid-container">
        <div className="member-grid">
          {members.length > 0 ? (
            members.map((member) => (
              <MemberCard
                key={member.id}
                member={member}
                onClick={() => handleCardClick(member)}
              />
            ))
          ) : (
            <div className="no-results">
              <p>No se encontraron integrantes que coincidan con los criterios de búsqueda.</p>
            </div>
          )}
        </div>
      </div>

      {selectedMember && (
        <MemberModal
          member={selectedMember}
          isOpen={!!selectedMember}
          onClose={closeModal}
        />
      )}
    </>
  )
}

export default MemberGrid