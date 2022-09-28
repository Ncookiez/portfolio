
// Config Interface:
interface Config {
  ens: `${string}.eth`
  github: string
  twitter: string
  projects: Project[]
}

// Project Interface:
interface Project {
  title: string
  subtitle: string
  description: string
  image: `http${string}` | `/projects/${string}`
  link?: string
  repo?: string
}

/* ========================================================================================================================================================================= */

// Projects List:
const projectsList: Project[] = [
  {
    title: 'WeaverFi',
    subtitle: 'The open‑source, multi‑chain DeFi portfolio tracker.',
    description: 'WeaverFi is the solution to scalability issues of existing portfolio trackers. An ever‑expanding repository of tools for the everyday DeFi user and a robust framework for anyone to integrate their own dapp.',
    image: '/projects/weaverfi.png',
    link: 'https://weaver.fi/',
    repo: 'https://github.com/WeaverFi'
  }
];

/* ========================================================================================================================================================================= */

// App Content & Configuration:
export const config: Config = {
  ens: 'ncookie.eth',
  github: 'Ncookiez',
  twitter: 'ncookie_eth',
  projects: projectsList
};