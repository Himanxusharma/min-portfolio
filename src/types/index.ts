export interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  status: 'Completed' | 'In Progress' | 'Experimental'
  features?: string[]
  link?: string
} 