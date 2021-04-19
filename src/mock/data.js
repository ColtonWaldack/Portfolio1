import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Colton Waldack',
  subtitle: "and I'm an aspiring software developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'My name is Colton Waldack, and I am currently studying for my Bachelor of Science in Information Technology. I have a specialization in Computer Science. I am a hardworking person who loves to learn more about all things IT every day. I have had a deep interest in all things computers since I was little. When I was only twelve, I built my first desktop computer. Since then, I built many more desktop computers, and I have moved into software development. ',
  paragraphTwo: ' I have many personal projects with both Java and Python, and I am currently working on a React web application. I have experience in stressful work environments and with meeting hard deadlines, and I always strive to develop my skills and knowledge to make me better at what I am working on. The moments in my life where I have taken on a new task and started learning about something have been the most exciting and fulfilling in my life. Therefore, I search for more of those experiences as often as I can. ',
  paragraphThree: '',
  resume: 'https://marymount0-my.sharepoint.com/:w:/g/personal/caw47685_marymount_edu/ES2oorpnWXFEstql9xSh-KQBPuKIaIrX3qecthkQhrSQoQ?e=pKNZQ0', // if no resume, the button will not show up
};
export const examplesData = {
  img: 'ES.jpg',
  paragraphOne: 'At Marymount University I spent some time playing on the MU Esports Team. I played for the Fortnite team and I had a lot of fun competing, practicing, and meeting new people. It was a great experience learning about teamwork and trying hard to win our tournaments.  ',
  paragraphThree: '',
  link: 'https://www.marymountsaints.com/recreation/Club_Sports/ESports/ESports_Info', // if no resume, the button will not show up
};
export const awardData = {
  img: 'award.png',
  paragraphOne: 'I have always strived to be my best. In the process I have been awarded various commendations. These include both dean’s list, and presidential scholar awards. The varying requirements for each of these rewards can be found at the links below.   ',
  paragraphThree: '',
  link: 'https://www.nvcc.edu/apps/1/deanslist/deanslist2203.aspx', // if no resume, the button will not show up
  link2: 'https://marymount.smartcatalogiq.com/en/2017-2018/Catalogs/Undergraduate-Catalog/Academic-Information-and-Policies/Academic-Honors/Dean-s-List', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.png',
    title: 'Java GUI "Paint Room" ',
    info: 'This is a project I developed in Java that acts as a mock application for Home Depot. The application allows users to create a custom order for paint and other supplies. It then provides the user a receipt and creates a copy of the order information on a MySQL server.',
    info2: '',
    url: 'https://github.com/ColtonWaldack/PaintRoom',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Age of Empires 2 DE win bot',
    info: 'This is a python application I made which uses screen recognition to automatically farm wins in AOE 2 DE. It does this by starting the game with certain win conditions which make it so the player wins automatically within 15 seconds. The bot then restarts the game and wins again and again. It does this until the player has enough wins to unlock special avatar images which unlock based on wins. It then automatically switches to the next playable faction or team and wins until the next avatar is unlocked. It will do this for all factions in the game, totally hands free. ',
    info2: '',
    url: 'https://github.com/ColtonWaldack/Aoe2DEWinBot',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'React eCommerce Store',
    info: 'I am currently developing a React application which is an eCommerce store. It relies on the Commerce.js API to create a store where I can sell items. It is currently still a work in progress.',
    info2: '',
    url: 'https://github.com/ColtonWaldack/Aoe2DEWinBot',
    repo: '', // if no repo, the button will not show up
  },
];
// Writing DATA
export const writingData = [
  {
    id: nanoid(),
    img: 'writing.png',
    title: 'Linux Command Line Documentation ',
    info: 'This is a paper I wrote which is mock documentation for basic usage of Linux command line. It covers the basics of creating folders and files, filling said files, and copying and removing the files. It also covers memory monitoring and some other specialized commands. This was written for my Operating Systems class.',
    info2: '',
    url: 'https://marymount0-my.sharepoint.com/:w:/g/personal/caw47685_marymount_edu/EUrzRMWYYIZGo5GhLbJkHuoBZiX36E_XeKyHIzCyjjuOHA?e=6YfUxH',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'writing1.png',
    title: 'Test Case Documentation',
    info: 'This is a document I wrote going over the test cases for a service provided by Marymount University. The service is called “Engage” and I put it though some test cases and document my findings. This was completed for my IT-355-A Software Testing, Documentation, and Quality Assurance class.',
    info2: '',
    url: 'https://marymount0-my.sharepoint.com/:w:/g/personal/caw47685_marymount_edu/EbPXfqRcuBVCums8Kr77qe8BMNh1176GCHHw4YGbsyRwBg?e=Qop5gu',
    repo: '', // if no repo, the button will not show up
  },
  
];

// Awards DATA
export const awardsData = [
  {
    id: nanoid(),
    img: 'nova.PNG',
    title: 'Northern Virginia Community College ',
    info: 'At NOVA I was placed on the Dean’s list twice in Spring 2017 and Fall 2019. I also was an honoree of NOVA’s most prestigious recognition, the Presidential Scholar in Spring 2018 and Summer 2020. ',
    info2: '',
    url: 'https://www.nvcc.edu/apps/1/deanslist/deanslist2203.aspx',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mm.PNG',
    title: 'Marymount University',
    info: 'At Marymount University I have been placed on the Deans list every semester I have attended. The deans list is Marymount highest term honor. I currently have a GPA of 3.944. I am also a part of Upsilon Pi Epsilon, the information technology honor society ',
    info2: '',
    url: 'https://marymount.smartcatalogiq.com/en/2017-2018/Catalogs/Undergraduate-Catalog/Academic-Information-and-Policies/Academic-Honors/Dean-s-List',
    repo: '', // if no repo, the button will not show up
  },
  
];
// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'colton.waldack324@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/coltonwaldack',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/colton-waldack/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ColtonWaldack/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
