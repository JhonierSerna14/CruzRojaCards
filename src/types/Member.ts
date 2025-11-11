export interface Member {
  id: number
  name: string
  role: string
  department: string
  photo: string
  description: string
  responsibilities: string[]
  contact?: {
    email?: string
    phone?: string
  }
  experience: string
  joinDate: string
}