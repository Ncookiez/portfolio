
// Type Imports:
import type { Config, Project } from '$lib/types';

/* ========================================================================================================================================================================= */

// Projects List:
const projectsList: Project[] = [
  {
    title: 'PoolTogether Hyperstructure App (WIP)',
    subtitle: 'The final version of the PoolTogether protocol',
    description: 'With the PoolTogether hyperstructure, we bring the best of V3 and V4 together into a permissionless, forever-software for prize savings worldwide. This is one of the apps to interact with it.',
    image: 'https://ncookie.ca/projects/poolHyper.png',
    repo: 'https://github.com/pooltogether/pooltogether-client-monorepo'
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