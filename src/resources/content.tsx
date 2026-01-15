import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Anjali",
  lastName: "Ishara",
  name: `Anjali Ishara`,
  role: "Staff Assistant at Bank of Ceylon",
  avatar: "/images/avtar.jpeg",
  email: "Anjaliishara19@gmail.com",
  location: "Asia/Colombo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "Linkedin",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/anjali-ishara-172b34159/",
    essential: true,
  },
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/anjali.ishara.2026?_rdc=1&_rdr#",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/anjaliishara2026/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name: "Whatsapp",
    icon: "whatsapp",
    link: "https://wa.me/94767288386",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/gallery/gal2.jpeg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `My Portfolio`,
  headline: <></>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Anjali Ishara</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Staff Assistant
        </Text>
      </Row>
    ),
    href: "https://anjali-ishara.vercel.app/",
  },
  subline: (
    <>
      I'm Anjali Ishara, a Staff Assistant at Bank of Ceylon engineer.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About Me",
  title: `About Me – Anjali Ishara`,
  description: `Hi I'm ${person.name}, ${person.role} from Sri Lanka`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Dedicated and detail-oriented banking professional with over seven years of
        experience as a Staff Assistant at Bank of Ceylon. Proficient in banking
        operations, customer service, and financial documentation. Equipped with
        academic expertise in banking and finance, complemented by strong
        organizational and analytical skills. Committed to delivering exceptional
        service and achieving operational excellence in the banking sector.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Bank of Ceylon PLC",
        timeframe: "Aug 2018 - Present",
        role: "Staff Assistant",
        achievements: [
          <>
            Process cash deposits, withdrawals, and other routine banking transactions with precision.
          </>,
          <>
            Maintain and update customer accounts, ensuring accurate and confidential record-keeping.

          </>,
          <>
            Assist clients with banking services such as loans, account inquiries, and digital banking solutions.

          </>,
          <>
            Uphold strict compliance with banking regulations and internal policies during all operations.

          </>,
          <>
            Generate daily, monthly, and annual financial reports for branch review and audits.

          </>,
          <>
            Train and mentor junior staff members, fostering a collaborative and efficient team environment.

          </>,
          <>
            Address and resolve customer concerns promptly, enhancing branch satisfaction metrics.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/boc2.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },

    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Academic Qualifications",
    institutions: [
      {
        name: "MBA in Business Administration",
        description: <><div>London Metropolitan University | United Kingdom</div></>,
        year: "2025 - Present",
      },
      {
        name: "BSc in Banking and Finance ",
        description: <><div>London Metropolitan University | United Kingdom</div>
          <div>Affiliated Esoft Metro Campus | Colombo, Sri Lanka</div></>,
        year: "2024",
      },
      {
        name: "GCE Advanced Level",
        description: <>Rathnawali Balika Maha Vidyalaya | Gampaha, Sri Lanka</>,
        year: "2016",
      },
      {
        name: "GCE Ordinary Level ",
        description: <>Rathnawali Balika Maha Vidyalaya | Gampaha, Sri Lanka</>,
        year: "2012",
      },
    ],
    images: [
      {
            src: "/images/gallery/gal10.jpeg",
            alt: "grad",
            width: 16,
            height: 16,
          },
          {
            src: "/images/gallery/gal8.jpeg",
            alt: "grad",
            width: 16,
            height: 16,
          },
          {
            src: "/images/gallery/gal9.jpeg",
            alt: "grad",
            width: 25,
            height: 10,
          },
          
         
          
        ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Professional Qualifications",
    institutions: [
      {
        name: "Diploma in Credit Management",
        description: <>Sri Lanka Institute of Credit Management</>,
        year: "2022",
      },{
        name: "Diploma in Applied Banking and Finance ",
        description: <>The Institute of Bankers of Sri Lanka | Colombo, Sri Lanka</>,
        year: "2019 - 2022",
      },



    ],
  },
  profSk: {
    display: true,
    title: "Professional Skills",
     experiences: [
      {
        company: "Bank of Ceylon PLC",
        timeframe: "Aug 2018 - Present",
        role: "Staff Assistant",
        achievements: [
          <>
            Banking operations and branch administration

          </>,
          <>
           Cash handling and account management


          </>,
          <>
Customer service and client relationship management

          </>,
          <>
Compliance with banking regulations and procedures

          </>,
          <>
Financial reporting and documentation accuracy

          </>,
          <>
Audit support and operational control

          </>,
          <>
Digital and mobile banking assistance
          </>,


 <>
Problem-solving and operational decision-making
          </>, <>
Data entry, validation, and record management
          </>,
          <>
Proficiency in Microsoft Office (Excel, Word, PowerPoint)
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/boc2.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },

    ],
    
      },

       personSk: {
    display: true,
    title: "Personal Skills",
     experiences: [
      {
        company: "Bank of Ceylon PLC",
        timeframe: "Aug 2018 - Present",
        role: "Staff Assistant",
        achievements: [
          <>
Strong communication and interpersonal abilities

          </>,
          <>
High attention to detail and accuracy


          </>,
          <>
Excellent time management and organizational skills

          </>,
          <>
Ethical, reliable, and responsible work approach

          </>,
          <>
Ability to work effectively under pressure

          </>,
          <>
Adaptable and open to continuous learning

          </>,
          <>
Positive attitude with a customer-focused mindset
          </>,


 <>
Team-oriented with emerging leadership qualities
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/boc2.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },

    ],
    
      },

    
  
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "My Blog",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `My Gallery`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/img022.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gal1.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/gal3.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gal6.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/gal2.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/gal4.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gal7.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gal12.jpeg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
