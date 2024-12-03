import {
  nitk,
  upb,
  cluboard,
  cash_flow,
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  publiclab,
  zulip,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
  ptt,
  cymed,
  oswe,
  ejpt,
  roundcube,
  initial,
  cve1,
  sss,
  pentestground,
  graphqlscanner,
  synack,
  linkin
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiMicrosoftazure,
  SiNginx
} from "react-icons/si";

import {
  FaHardHat,
  FaRust
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";

import {
  FaGolang
} from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1vkxyMDB5_KpMwt4QXFgT2aqdRizr8Czh/view?usp=sharing";
export const repoLink = "https://github.com/mittal-parth/personal-portfolio";

export const callToAction = "https://www.linkedin.com/in/catalin-iovita";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Certificates",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "openSource",
    title: "Open Source",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: upb,
    title: "University Politehnica of Bucharest",
    degree: "Master's Degree in Computer Science",
    duration: "Sep 2024 - Present",
  },
  {
    id: "education-2",
    icon: upb,
    title: "University Politehnica of Bucharest",
    degree: "Bachelor's Degree in Computer Science",
    duration: "Sep 2019 - Jul 2023",
  },
];

export const achievements = [
  {
    id: "a-1",
    icon: oswe,
    event: "Offensive Security Web Expert",
    position: "OSWE",
    content1: "Perform advanced web app source code auditing",
    content2: "Analyze code, write scripts, and exploit web vulnerabilities",
    content3: "Implement complex chained attacks using multiple vulnerabilities",
    project: "https://www.credential.net/e81a6fe3-0e0f-444a-9149-a9a2c66ce99e#gs.f81qzd",
  },
  {
    id: "a-2",
    icon: ejpt,
    event: "Junior Penetration Tester",
    position: "eJPT",
    content1: "Perform host and network Penetration Testing",
    content2: "Identify vulnerabilities in web applications",
    content3: "Enumerate network and system information",
    project: "https://certs.ine.com/583b3a35-0761-4b98-840a-a125f3612d2d",
  },
];

export const discoveries = [
  {
    id: "a-1",
    event: "CVE-2024-6886",
    position: "Gitea",
    content1: "A stored cross-site scripting (XSS) vulnerability in Gitea 1.22.0 and earlier may allow a remote attacker to execute arbitrary JavaScript in the web browser of a victim by injecting a malicious payload into the repository description.",
    content2: "",
    content3: "",
    project: "https://nvd.nist.gov/vuln/detail/CVE-2024-6886",
  },
  {
    id: "a-2",
    event: "CVE-2024-39123",
    position: "Calibre-Web",
    content1: "A stored cross-site scripting (XSS) vulnerability in Calibre-Web 0.6.21 and earlier may allow a remote attacker to execute arbitrary JavaScript in the web browser of a victim by injecting a malicious payload into the book description field.",
    content2: "",
    content3: "",
    project: "https://nvd.nist.gov/vuln/detail/CVE-2024-39123",
  },
  {
    id: "a-3",
    event: "CVE-2024-40746",
    position: "HikaShop Joomla",
    content1: "A stored cross-site scripting (XSS) vulnerability in HikaShop Joomla Component < 5.1.1 allows remote attackers to execute arbitrary JavaScript in the web browser of a user, by including a malicious payload in the `description` parameter of any product.",
    content2: "",
    content3: "",
    project: "https://nvd.nist.gov/vuln/detail/CVE-2024-40746",
  },
];

export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-3",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-6",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-7",
        icon: SiC,
        name: "C",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiDjango,
        name: "Django",
      },
      {
        id: "f-7",
        icon: SiGraphql,
        name: "GraphQL",
      },
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiMicrosoftazure,
        name: "Azure",
      },
      {
        id: "t-2",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
    ],
  },
];

export const experiences = [
  {
    organisation: "Synack",
    logo: synack,
    link: "https://www.synack.com/",
    positions: [
      {
        title: "Security Researcher",
        duration: "May 2024 - Present",
        content: [
          {
            text: "Part of a private network of highly curated and vetted hackers for some of the biggest brands in the world",
            link: ""
          },
          {
            text: "Hunting for vulnerabilities in web applications based on the private Bug Bounty program formula",
            link: ""
          },
        ],
      },
    ],
  },
  {
    organisation: "Pentest-Tools.com",
    logo: ptt,
    link: "https://pentest-tools.com/",
    positions: [
      {
        title: "Security Researcher",
        duration: "Oct 2023 - Present",
        content: [
          {
            text: "Review open-source applications to discover zero-day vulnerabilities and replicate proof-of-concept exploits",
            link: "",
          },
          {
            text: "Write blog articles to share my findings, contributing to the information security community and supporting collective knowledge in the field",
            link: "",
          },
        ],
      },
      {
        title: "Software Developer",
        duration: "Nov 2021 - Present",
        content: [
          {
            text: "Integrated the latest vulnerabilities exploits from over 50 recent CVEs into platform tools, improving the detection capabilities",
            link: "",
          },
          {
            text: "Developed a new tool that detects and exploits vulnerabilities in GraphQL applications, used by over 2000 clients",
            link: "",
          },
          {
            text: "Created a free playground featuring deliberately vulnerable applications to test how effective vulnerability scanning tools are",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Cymed",
    logo: cymed,
    link: "https://www.cymed.ro/",
    positions: [
      {
        title: "Security Engineer Intern",
        duration: "Jul 2021 - Nov 2021",
        content: [
          {
            text: "Developed and deployed automated scripts that integrated Threat Intelligence indicators resulting in a 30% improvement in incident detection accuracy and a 25% reduction in false positives",
            link: ""
          },
          {
            text: "Improved threat detection across 70 client systems optimizing incident response efficiency by developing OSINT tools",
            link: ""
          },
          {
            text: "Analyzed and responded to over 150 security incidents by investigating alerts and identifying potential threats",
            link: ""
          },
        ],
      },
    ],
  },
];

export const openSourceContributions = [
  {
    id: "os-1",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title:
      "Move _wiki to old table look, common template for email and settings digest only",
    link: "https://github.com/publiclab/plots2/pull/10731",
    number: "#10731",
    date: "Feb 24 2022",
    linesAdded: "101",
    linesDeleted: "48",
  },
  {
    id: "os-2",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "Combine templates for email digest and settings digest",
    link: "https://github.com/publiclab/plots2/pull/10681",
    number: "#10681",
    date: "Feb 9 2022",
    linesAdded: "86",
    linesDeleted: "106",
  },
  {
    id: "os-3",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "Fix reverse chronological sorting on inline grids",
    link: "https://github.com/publiclab/plots2/pull/11114",
    number: "#11114",
    date: "May 4 2022",
    linesAdded: "1",
    linesDeleted: "1",
  },
  {
    id: "os-4",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "style: Make post page footer responsive",
    link: "https://github.com/publiclab/plots2/pull/10634",
    number: "#10634",
    date: "Feb 24 2022",
    linesAdded: "64",
    linesDeleted: "8",
  },
  {
    id: "os-5",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Typos in Translation_System.md",
    link: "https://github.com/publiclab/plots2/issues/11120",
    number: "#11120",
    date: "May 6 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-6",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Missing translations on layouts/_header.html.erb",
    link: "https://github.com/publiclab/plots2/issues/11115",
    number: "#11115",
    date: "May 4 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-7",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Missing translation of 'This is part of' on _tagging.html.erb",
    link: "https://github.com/publiclab/plots2/issues/10986",
    number: "#10986",
    date: "Apr 8 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-8",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Wrong closing heading tag in _digest.html.erb",
    link: "https://github.com/publiclab/plots2/issues/10985",
    number: "#10985",
    date: "Apr 8 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-9",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Add class to center wiki.scraped_image in wikis template",
    link: "https://github.com/publiclab/plots2/issues/10797",
    number: "#10797",
    date: "Mar 18 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-10",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Images on /wiki are not center aligned",
    link: "https://github.com/publiclab/plots2/issues/10755",
    number: "#10755",
    date: "Mar 4 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-11",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "invitations: Check invitation from a now-deactivated user.",
    link: "https://github.com/zulip/zulip/pull/20206",
    number: "#20206",
    date: "Dec 30 2021",
    linesAdded: "31",
    linesDeleted: "1",
  },
  {
    id: "os-12",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "invitations: Check invitation from a now-deactivated user.",
    link: "https://github.com/zulip/zulip/pull/20206",
    number: "#20206",
    date: "Dec 30 2021",
    linesAdded: "31",
    linesDeleted: "1",
  },
  {
    id: "os-13",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "authentication: Fix placeholder realms for redirects.",
    link: "https://github.com/zulip/zulip/pull/19689",
    number: "#19689",
    date: "Sep 9 2021",
    linesAdded: "1",
    linesDeleted: "1",
  },
  {
    id: "os-14",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "message_editing : Fix topic edit propagate option cut-off",
    link: "https://github.com/zulip/zulip/pull/19760",
    number: "#19760",
    date: "Feb 10 2022",
    linesAdded: "9",
    linesDeleted: "8",
  },
];

export const projects = [
  {
    id: "project-1",
    title: "GraphQL Scanner",
    github: "",
    link: "https://pentest-tools.com/website-vulnerability-scanning/api-scanner",
    image: graphqlscanner,
    content:
      "Tool that detects and exploits vulnerabilities in GraphQL applications",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-2",
        icon: SiDjango,
        name: "Django"
      },
      {
        id: "icon-3",
        icon: SiGraphql,
        name: "GraphQL"
      },
      {
        id: "icon-4",
        icon: SiMysql,
        name: "MySQL"
      },
      {
        id: "icon-5",
        icon: SiJavascript,
        name: "Javascript"
      },
    ],
  },
  {
    id: "project-2",
    title: "Pentest-Ground",
    github: "",
    link: "https://pentest-ground.com/",
    image: pentestground,
    content:
      "Free playground featuring deliberately vulnerable applications to test how effective vulnerability scanning tools are",
    stack: [
       {
        id: "icon-1",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-2",
        icon: SiDjango,
        name: "Django"
      },
      {
        id: "icon-3",
        icon: SiNginx,
        name: "Nginx"
      },
      {
        id: "icon-5",
        icon: SiJavascript,
        name: "Javascript"
      },
    ],
  },
];

export const blogPosts = [
  {
    id: "post-1",
    title: "Roundcube: exfiltrating emails with CVE-2021-44026",
    link: "https://pentest-tools.com/blog/roundcube-exfiltrating-emails-with-cve-2021-44026",
    date: "Dec 22 2023", // Can be edited to any string format
    image: roundcube,
    tags: [
      {
        id: "tag-1",
        name: "SQLi"
      },
      {
        id: "tag-2",
        name: "Email security"
      },
    ],
  },
  {
    id: "post-2",
    title: "3 initial access tactics to simulate in your penetration tests",
    link: "https://pentest-tools.com/blog/initial-access-tactics-pentests",
    date: "Dec 11 2023",
    image: initial,
    tags: [
      {
        id: "tag-1",
        name: "Phishing"
      },
      {
        id: "tag-2",
        name: "Ransomware"
      },
    ],
  },
  {
    id: "post-3",
    title: "How to manually detect CVE-2022-21371 ",
    link: "https://pentest-tools.com/blog/detect-cve-2022-21371-oracle-weblogic-servers",
    date: "Aug 20 2022",
    image: cve1,
    tags: [
      {
        id: "tag-1",
        name: "RCE"
      },
      {
        id: "tag-2",
        name: "CVE-2022-21371"
      },
    ],
  },
];

export const conferences = [
  {
    id: "post-1",
    title: "Linkin' to your browser",
    link: "https://docs.google.com/presentation/d/1KJPXPYn8I2VNRJWlAuQvhn7N-BMGKzwYruxKtIx940w",
    date: "Nov 29 2024", // Can be edited to any string format
    image: linkin,
    tags: [
      {
        id: "tag-1",
        name: "DefCamp24"
      },
      {
        id: "tag-2",
        name: "HTML library"
      },
    ],
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

export const extraCurricular = [
  {
    organisation: "Security Summer School",
    title: "Presenter",
    duration: "Jul 2022",
    content: [
      {
        text: "Delivered presentations on security topics concerning privilege escalation and end-to-end attacks",
      },
       {
        text: "Designed multiple Capture The Flag (CTF) challenges focused on web security for a dedicated track, which attracted participation from numerous students.",
        link: "https://security.cs.pub.ro/summer-school/wiki/",
      },
    ],
    logo: sss,
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/catalin-iovita",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/cataliniovita",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:cataliniovita47@gmail.com",
  },
];

export const aboutMe = {
    name: "Catalin Iovita",
    intro: "Developer and security researcher with a passion for creating security tools and discovering vulnerabilities."
}
