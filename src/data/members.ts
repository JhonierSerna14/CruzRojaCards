import type { Member } from '../types/Member.js'

export const membersData: Member[] = [
  {
    id: 1,
    name: "Dr. María Elena Rodríguez",
    role: "Coordinadora General",
    department: "Dirección",
    photo: "/placeholder-photos/maria-rodriguez.jpg",
    description: "Médica especialista en emergencias con más de 15 años de experiencia en la Cruz Roja Colombiana. Lidera los esfuerzos humanitarios en la región de Caldas.",
    responsibilities: [
      "Coordinación general de actividades humanitarias",
      "Supervisión de programas de salud comunitaria",
      "Relaciones institucionales",
      "Planificación estratégica"
    ],
    contact: {
      email: "coordinacion@cruzrojavillamaria.org",
      phone: "310-555-0101"
    },
    experience: "15 años en atención de emergencias y gestión humanitaria",
    joinDate: "2009-03-15"
  },
  {
    id: 2,
    name: "Carlos Andrés Mejía",
    role: "Coordinador de Socorro",
    department: "Socorro y Emergencias",
    photo: "/placeholder-photos/carlos-mejia.jpg",
    description: "Paramédico certificado y especialista en rescate urbano. Coordina las operaciones de respuesta a emergencias en Villamaría y municipios aledaños.",
    responsibilities: [
      "Coordinación de equipos de rescate",
      "Atención prehospitalaria de emergencias",
      "Capacitación en primeros auxilios",
      "Logística de equipos de socorro"
    ],
    contact: {
      email: "socorro@cruzrojavillamaria.org",
      phone: "320-555-0102"
    },
    experience: "12 años en servicios de emergencias médicas",
    joinDate: "2012-08-20"
  },
  {
    id: 3,
    name: "Ana Lucía Vargas",
    role: "Coordinadora de Juventud",
    department: "Juventud Cruz Roja",
    photo: "/placeholder-photos/ana-vargas.jpg",
    description: "Trabajadora social especializada en programas juveniles. Lidera iniciativas de formación y participación de jóvenes voluntarios en actividades humanitarias.",
    responsibilities: [
      "Formación de jóvenes voluntarios",
      "Programas de educación humanitaria",
      "Coordinación de campañas de prevención",
      "Desarrollo de proyectos comunitarios"
    ],
    contact: {
      email: "juventud@cruzrojavillamaria.org",
      phone: "315-555-0103"
    },
    experience: "8 años en trabajo social y programas juveniles",
    joinDate: "2016-01-10"
  },
  {
    id: 4,
    name: "Luis Fernando Ospina",
    role: "Coordinador de Salud",
    department: "Salud Comunitaria",
    photo: "/placeholder-photos/luis-ospina.jpg",
    description: "Enfermero profesional especializado en salud pública. Coordina programas de promoción de la salud y prevención de enfermedades en la comunidad.",
    responsibilities: [
      "Programas de promoción y prevención en salud",
      "Campañas de vacunación",
      "Educación en salud comunitaria",
      "Coordinación con centros de salud locales"
    ],
    contact: {
      email: "salud@cruzrojavillamaria.org",
      phone: "311-555-0104"
    },
    experience: "10 años en enfermería y salud pública",
    joinDate: "2014-05-18"
  },
  {
    id: 5,
    name: "Sandra Milena Torres",
    role: "Coordinadora de Voluntariado",
    department: "Gestión de Voluntarios",
    photo: "/placeholder-photos/sandra-torres.jpg",
    description: "Psicóloga social con experiencia en gestión del talento humano voluntario. Encargada de la selección, capacitación y seguimiento de los voluntarios.",
    responsibilities: [
      "Reclutamiento y selección de voluntarios",
      "Programas de capacitación y formación",
      "Seguimiento y evaluación del desempeño",
      "Bienestar de voluntarios"
    ],
    contact: {
      email: "voluntariado@cruzrojavillamaria.org",
      phone: "318-555-0105"
    },
    experience: "6 años en gestión de recursos humanos voluntarios",
    joinDate: "2018-09-12"
  },
  {
    id: 6,
    name: "Roberto Gómez Herrera",
    role: "Coordinador Logístico",
    department: "Logística y Suministros",
    photo: "/placeholder-photos/roberto-gomez.jpg",
    description: "Ingeniero industrial especializado en logística humanitaria. Maneja la gestión de suministros, equipos y recursos materiales de la sede.",
    responsibilities: [
      "Gestión de inventarios y suministros",
      "Coordinación de transporte y movilización",
      "Mantenimiento de equipos especializados",
      "Logística de operaciones de campo"
    ],
    contact: {
      email: "logistica@cruzrojavillamaria.org",
      phone: "314-555-0106"
    },
    experience: "9 años en logística y gestión de operaciones",
    joinDate: "2015-11-03"
  }
]