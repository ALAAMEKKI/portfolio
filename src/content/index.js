export default {
  nav: {
    logo: 'About me',
    links: [
      { text: 'My Projects', to: 'mywork' },
      { text: 'Contact me', to: 'mycontact' },
    ],
  },
  header: {
    img:
      'https://avatars.githubusercontent.com/u/74403898?v=4',
    imgPlaceholder:
      'data:image/jpeg;base64,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',
    text: ['Hi!', "I'm Alaa Mekki", "I'm a "],
    typical: [
      'Full stack Js developer. 🖥',
      2000,
      'Web developer. 🖥',
      2000,
    ],
    typicalwork: [
      'I have done ',
      2000,
      'I have done..',
      2000,
    ],
    btnText: 'Discover More',
  },
  work: [{
    title: 'Projects',
    img: process.env.PUBLIC_URL + '/assets/eventiny2.png',
    projectName: 'EventinyTN @Rebootkamp',
    desc:
      `Realization of a web application (online event box) that allows the user to consult, participate in events, buy tickets, pay for marketing solutions for social networks, or become an organizer to publish events.  
      
      SCRUM methodology.
      SCRUM master.
      - Technologies used:
      Vue.js, Axios, Nest.js, Rest API, TypeOrm, MySQL, Google Maps API, Google Social Login, Cloudinary, Konnect (payment interface), Bootstrap, SemanticUI, Swagger.`,
    link:"https://github.com/Eventiny-tn/Eventiny-client"
  },

  {
  title: 'Projects',
    img: process.env.PUBLIC_URL + '/assets/catwalk1.jpg',
    projectName: 'Catwalk @Rebootkamp',
    desc:
      `Group Project. (Developer)
      eBay's client interface for product details, Overview service, associated product service, Q&A, rating, and feedback service.
      - Technologies used:
        React, Node.js, express, Mysql, service-oriented architecture (deployment), Bootstrap.`,
        link:"https://github.com/Trio-X"
},
{
  title: 'Projects',
    img: process.env.PUBLIC_URL + '/assets/logo.png',
    projectName: 'TyreBox @Rebootkamp',
    desc:
    `Realization of a web application that allows the user to consult the prices of tires in stock.
    SCRUM methodology.
    SCRUM master.
    - Technologies used:
      React, Node.js, express, Mysql, JSON Web Token (JWT), Bootstrap.`,
      link:"https://github.com/TyreBox-XL-mation/TyreBox-XL-mation"
}
  ],

  stack: {
    title: 'Stack',
    tech: [
      {
        img: process.env.PUBLIC_URL + '/logo512.png',
        alt: 'react',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/vuejs.png',
        alt: 'vuejs',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/talwind.png',
        alt: 'tailwindcss',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/redux.png',
        alt: 'redux',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/node.png',
        alt: 'node',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/express.png',
        alt: 'express',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/nest.png',
        alt: 'nestjs',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/mysql.png',
        alt: 'mysql',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/mongo.png',
        alt: 'mongodb',
      },
    ],
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only`,
  },
  contact: {
    title: 'Ping Me!',
    desc:
      "I really hope that you got a small idea of who I am .It will be awesome to collaborate and work with other people, that's why I provided you with  my contacts and where you can find me on social media and most importantly on Github.You can reach out to me at anytime.",
    socials: [
      {
        alt: 'facebook',
        img: process.env.PUBLIC_URL + '/assets/facebook.png',
        link:'https://www.facebook.com/alaa.ravens/'
      },
      {
        alt: 'github',
        img: process.env.PUBLIC_URL + '/assets/github.png',
        link:'https://github.com/ALAAMEKKI'
      },
      {
        alt: 'link',
        img: process.env.PUBLIC_URL + '/assets/link.png',
        link:'https://www.linkedin.com/in/alaa-mekki-68ba35201/'
      },
      {
        alt: 'gmail',
        img: process.env.PUBLIC_URL + '/assets/gmail.png',
        link:'https://mail.google.com/mail/u/0/#inbox'
      },
    ],
    img:
      'https://www.artistakshay.com/wp-content/uploads/2020/02/contact-me.png',
    
  },
};
