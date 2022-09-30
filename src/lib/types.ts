
// Config Interface:
export interface Config {
  github: string
  twitter: string
  projects: Project[]
}

// Project Interface:
export interface Project {
  title: string
  subtitle: string
  description: string
  image: `http${string}` | `/projects/${string}`
  link?: string
  repo?: string
}