
// Type Imports:
import type { Config, Project } from '$lib/types';

/* ========================================================================================================================================================================= */

// Projects List:
const projectsList: Project[] = [
  {
    title: 'Cabana',
    subtitle: 'Interfaces for the PoolTogether Hyperstructure',
    description: 'Cabana is a series of interfaces, packages and APIs to interact with the PoolTogether Hyperstructure, the permissionless forever-software for prize savings worldwide.',
    image: 'https://ncookie.ca/projects/cabana.png',
    link: 'https://cabana.fi/',
    repo: 'https://github.com/GenerationSoftware/pooltogether-client-monorepo'
  },
  {
    title: 'WeaverFi',
    subtitle: 'The open‑source, multi‑chain DeFi portfolio tracker',
    description: 'WeaverFi is the solution to scalability issues of existing portfolio trackers. An ever‑expanding repository of tools for the everyday DeFi user and a robust framework for anyone to integrate their own dapp.',
    image: 'https://ncookie.ca/projects/weaverfi.png',
    link: 'https://weaver.fi/',
    repo: 'https://github.com/WeaverFi'
  },
  {
    title: 'World Hash',
    subtitle: 'Decentralized Minecraft world sharing',
    description: 'This prize-winning ETHOnline2022 hackathon project was super fun to build, and it allows anyone to share their Minecraft worlds through ENS and IPFS.',
    image: 'https://ncookie.ca/projects/worldHash.png',
    repo: 'https://github.com/trmid/world-hash'
  },
  {
    title: '3PI',
    subtitle: 'The toolkit for on-chain API key management',
    description: 'We made it to the finals of ETHToronto2022 with this project, where we made it super easy for anyone to monetize their API on-chain.',
    image: 'https://ncookie.ca/projects/3PI.png',
    repo: 'https://github.com/3PIKeys'
  },
  {
    title: 'Pool Stats',
    subtitle: 'All the PoolTogether stats you never knew you needed',
    description: 'This contribution to the PoolTogether DAO allows anyone to quickly view interactive stats and charts regarding the protocol.',
    image: 'https://ncookie.ca/projects/poolStats.png',
    repo: 'https://github.com/Ncookiez/pooltogether-stats'
  },
  {
    title: 'Prize Calc',
    subtitle: 'The PoolTogether delegation calculator',
    description: 'One of my first contributions to the PoolTogether DAO was this app to calculate expected delegation outcomes.',
    image: 'https://ncookie.ca/projects/prizeCalc.png',
    link: 'https://prizecalc.com/',
    repo: 'https://github.com/Ncookiez/pooltogether-multidelegator-preview'
  },
  {
    title: 'Portfolio App',
    subtitle: 'This very app, in the flesh!',
    description: 'This portfolio app was made with my handy SvelteKit PWA template. Hope you liked it :)',
    image: 'https://ncookie.ca/icon.png',
    repo: 'https://github.com/Ncookiez/portfolio'
  }
];

/* ========================================================================================================================================================================= */

// App Content & Configuration:
export const config: Config = {
  github: 'Ncookiez',
  twitter: 'ncookie_eth',
  lens: 'ncookie',
  projects: projectsList
};