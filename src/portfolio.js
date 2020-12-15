
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Manal Liaquat",
  title: "Hi all, I'm Manal",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / ReactJS / NextJS / NodeJS / MongoDB / ExpressJS / React Native and some other cool libraries and frameworks."),
  resumeLink: ""
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/manalliaquat",
  linkedin: "https://www.linkedin.com/in/manalliaquat/",
  gmail: "m.manalliaquat@gmail.com",
  // gitlab: "https://gitlab.com/manalliaquat",
  facebook: "https://www.facebook.com/manal.liaquat.7",
  instagram: "https://www.instagram.com/manal.liaquat/",
  twitter: "https://twitter.com/manalliaquat",
  freeCodeCamp: "https://www.freecodecamp.org/manalliaquat",
  codePen: "https://codepen.io/ManalLiaquat"
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase"),
    emoji("⚡ Written some scripts on Google Adwords Scripts to run Youtube ads")
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "nextjs",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "expressjs",
      fontAwesomeClassname: "fab fa-node-js"
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "65%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Code Structure",
      progressPercentage: "70%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Consultant Developer",
      company: "Digital MarknAdsPlan",
      companylogo: require("./assets/images/digitalMarknAdsPlan.webp"),
      date: "June 2020 – Present",
      desc: "Working as a consultant developer.",
      descBullets: [
        "Web Application Developer",
      ]
    },
    {
      role: "React Native Developer",
      company: "Systems Avenue",
      companylogo: require("./assets/images/systemsAvenue.webp"),
      date: "March 2019 – June 2020",
      desc: "Mainly worked as a senior mobile application developer.",
      descBullets: [
        "Mobile Application Developer",
        "Web Application Developer"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "manalliaquat", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    // {
    //   image: "",
    //   link: ""
    // }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Udacity Nano-Degree React",
      subtitle: "Completed Certification from Udacity for Web and Mobile App Development.",
      image: require("./assets/images/udacity.png"),
      footerLink: [
        { name: "Certification", url: "https://confirm.udacity.com/KHYFX7KF" }
      ]
    },
    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certification from SMIT for PWA Web App Development.",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [{ name: "Certification", url: "" }]
    },
    {
      title: "Web & Mobile App Developer",
      subtitle: "Completed Certification from SMIT for Web and Mobile App Development",
      image: require("./assets/images/smit.webp"),
      footerLink: [
        { name: "Certification", url: "" },
      ]
    },
    {
      title: "Legacy Front End Certification",
      subtitle: "Completed Certification from FreeCodeCamp for Legacy Front End",
      image: require("./assets/images/freecodecamp.webp"),
      footerLink: [
        { name: "Certification", url: "https://www.freecodecamp.org/certification/manalliaquat/legacy-front-end" },
      ]
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      subtitle: "Completed Certification from FreeCodeCamp for JavaScript Algorithms and Data Structures",
      image: require("./assets/images/freecodecamp.webp"),
      footerLink: [
        { name: "Certification", url: "https://www.freecodecamp.org/certification/manalliaquat/javascript-algorithms-and-data-structures" },
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://medium.com/@m.manalliaquat/why-i-choose-react-ab215dffdb79",
      title: "Why I choose React?",
      description: "React was developed by Facebook in March 2013, now it is the most popular javascript library. React is used to create Single-Page Applications (SPA)."
    },
    {
      url: "https://medium.com/swlh/cra-to-pwa-1e572207d7",
      title: "CRA to PWA 😎",
      description: "This is the most searched topic on the internet today, “How to convert CRA (Create React App) to PWA (Progressive Web App)”."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    // {
    //   title: "",
    //   subtitle: "",
    //   slides_url: "",
    //   event_url: ""
    // }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3092091919",
  email_address: "m.manalliaquat@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName: "manalliaquat"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo, twitterDetails };
