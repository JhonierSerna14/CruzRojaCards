import { useEffect } from 'react'
import type { Member } from '../types/Member.js'
import './MemberModal.css'

interface MemberModalProps {
  member: Member
  isOpen: boolean
  onClose: () => void
}

const MemberModal = ({ member, isOpen, onClose }: MemberModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        
        <div className="modal-header">
          <div className="modal-photo">
            <img
              src={member.photo}
              alt={member.name}
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = '/placeholder-avatar.svg'
              }}
            />
          </div>
          <div className="modal-basic-info">
            <h2>{member.name}</h2>
            <h3>{member.role}</h3>
            <p className="department">{member.department}</p>
            <p className="join-date">
              Miembro desde: {new Date(member.joinDate).toLocaleDateString('es-CO', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>

        <div className="modal-body">
          <section className="description-section">
            <h4>Acerca de</h4>
            <p>{member.description}</p>
          </section>

          <section className="responsibilities-section">
            <h4>Responsabilidades y Funciones</h4>
            <ul>
              {member.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </section>

          <section className="experience-section">
            <h4>Experiencia</h4>
            <p>{member.experience}</p>
          </section>

          {member.contact && (
            <section className="contact-section">
              <h4>Contacto</h4>
              <div className="contact-info">
                {member.contact.email && (
                  <p>
                    <strong>Email:</strong> 
                    <a href={`mailto:${member.contact.email}`}>
                      {member.contact.email}
                    </a>
                  </p>
                )}
                {member.contact.phone && (
                  <p>
                    <strong>Teléfono:</strong> 
                    <a href={`tel:${member.contact.phone}`}>
                      {member.contact.phone}
                    </a>
                  </p>
                )}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}

export default MemberModal