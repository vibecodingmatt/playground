import { ReactNode } from 'react'

export interface ProjectShowcase {
  id: string
  name: string
  description: string
  category: string
  component: ReactNode
  featured?: boolean
}
