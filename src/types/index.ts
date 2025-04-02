export interface Experiment {
  id: string
  title: string
  description: string
  tech: string[]
  status: 'Completed' | 'In Progress' | 'Planned'
  features?: string[]
  link?: string
} 