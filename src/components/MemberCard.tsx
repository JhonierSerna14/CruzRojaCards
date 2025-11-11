import type { Member } from '../types/Member.js'
import './MemberCard.css'

interface MemberCardProps {
  member: Member
  onClick: () => void
}

const MemberCard = ({ member, onClick }: MemberCardProps) => {
  return (
    <div className="member-card" onClick={onClick}>
      <div className="member-photo-container">
        <img
          src={member.photo}
          alt={member.name}
          className="member-photo"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = '/placeholder-avatar.svg'
          }}
        />
        <div className="photo-overlay">
          <span className="click-text">Ver detalles</span>
        </div>
      </div>
      
      <div className="member-info">
        <h3 className="member-name">{member.name}</h3>
        <p className="member-role">{member.role}</p>
        <p className="member-department">{member.department}</p>
        
        <div className="member-preview">
          <p>{member.description.substring(0, 100)}...</p>
        </div>
      </div>
      
      <div className="card-footer">
        <span className="experience-badge">
          {member.experience}
        </span>
      </div>
    </div>
  )
}

export default MemberCard