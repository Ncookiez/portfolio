
// Config Interface:
export interface Config {
  github: string
  twitter: string
  lens: string
  projects: Project[]
}

// Project Interface:
export interface Project {
  title: string
  subtitle: string
  description: string
  image: string
  link?: string
  repo?: string
}