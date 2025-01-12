import React from "react";

const projects = [
  {
    category: "Project",
    title: "NHTSA .NET Client SDK",
    slug: "#nhtsa-net-client-sdk",
    imageUrl: "img/projects/csharp-code.jpg",
    subtitle: "NHTSA unofficial .NET Client SDK",
    period: "October 2024",
    tech: "C#, .NET 8, VS Code",
    description: (
      <>
        <p>
          .NET SDK providing easy access to the NHTSA's APIs (Vehicle, Recalls, etc.). This NuGet package enables
          developers to retrieve vehicle safety information, recalls, complaints data, etc.
        </p>
        <p>
          <a href="https://www.nhtsa.gov/" title="National Highway Traffic Safety Administration website">
            <img src="https://raw.githubusercontent.com/ryuzakyl/Nhtsa.SDK/refs/heads/master/assets/images/nhtsa-brand.webp" />
          </a>
        </p>
        <p>
          I developed a <a href="https://learn.microsoft.com/en-us/dotnet/">.NET</a> client SDK for the <a href="https://www.nhtsa.gov/nhtsa-datasets-and-apis">NHTSA APIs</a> to
          simplify integration with their services, providing a clean, intuitive interface for developers. By leveraging modern
          patterns like OneOf, the SDK ensures robust and expressive error handling, making it easier to manage API responses.
        </p>
        <p>
          This project has been thoroughly tested with <a href="https://xunit.net/">xUnit</a> and CI/CD pipelines are also included.
          Additionally, I focused on the entire distribution lifecycle, from designing a developer-friendly API to packaging and
          publishing the SDK as a <a href="https://www.nuget.org/packages/Nhtsa.SDK">NuGet package</a>. This approach streamlines
          adoption, promotes reusability, and aligns with best practices for creating maintainable and accessible libraries
          in the .NET ecosystem.
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/ryuzakyl/Nhtsa.SDK",
      },
    ],
  },
  {
    category: "Thesis",
    title: "MSc. Thesis in Cybersecurity",
    slug: "#msc-thesis-in-cybersecurity",
    imageUrl: "img/projects/cybersec-promo.jpg",
    subtitle: "Study and implementation of security measures for Kubernetes Clusters",
    period: "March 2021 - November 2021",
    tech: "Kubernetes, Docker, Linux, Grafana, Prometheus, Cilium, Falco",
    description: (
      <>
        <p>
          <div class="img-center">
            <img src="https://raw.githubusercontent.com/ryuzakyl/msc-thesis-materials/refs/heads/master/static/img/msc-thesis-cover.png" />
          </div>
        </p>
        <p></p>
        <strong>Abstract</strong>
        <p>
        Nowadays, the functionalities performed by software applications are more complex. Aspects such as application
size and availability have made cloud computing platforms the most popular infrastructure for hosting such
applications. Cloud-native applications are usually container-based, and in large application environments, a
platform is needed for the efficient orchestration of these containers. Kubernetes represents the standard used
today for these purposes.
        </p>
        <p>
        In this work, the information in the literature regarding good security practices is
systematized. In addition, a cluster security validation methodology was also designed. This protocol consists of
five phases that were applied in several attack scenarios carefully designed to validate our proposal. As a result,
the effectiveness of the measures proposed to improve the security in a Kubernetes cluster was verified.
        </p>
        <p></p>
        <strong>Slides</strong>
        <p>
          <iframe src="https://slides.com/ryuzakyl/seguridad-en-kubernetes-succint/embed?style=dark" width="720" height="525" title="[Succint] Seguridad en Kubernetes" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/ryuzakyl/msc-in-cybersecurity-materials",
      },
      {
        name: "Thesis document (PDF)",
        link: "https://crea.ujaen.es/jspui/handle/10953.1/18678",
      },
    ],
  },
  {
    category: "Thesis",
    title: "BSc. Thesis in Computer Science",
    slug: "#bsc-thesis-in-computer-science",
    imageUrl: "img/projects/iris-recognition.png",
    subtitle: "Iris Recognition using Functional Data Analysis",
    period: "January 2013 - June 2013",
    tech: "Pattern Recognition, Machine Learning, Python, Numpy, Open CV",
    description: (
      <>
        <p>
          The new approach proposed and its results were included in the{" "}
          <a href="https://link.springer.com/chapter/10.1007/978-3-642-41827-3_49">IAPR Conference Paper</a>:{" "}
          <b>A New Iris Recognition Approach Based on a Functional Representation</b>.
        </p>
        <p>
          <div class="img-center">
            <img src="https://raw.githubusercontent.com/ryuzakyl/bsc-thesis-materials/refs/heads/master/static/img/bsc-thesis-cover.png" />
          </div>
        </p>
        <p></p>
        <strong>Abstract</strong>
        <p>
          Nowadays, the recognition and identification of individuals is of vital importance in a society
          that is constantly growing and developing.
        </p>
        <p>
          Biometric recognition systems allow the automatic identification of individuals based on their own
          traits or characteristics. Among these systems, iris recognition systems stand out as one of the
          most accurate and reliable, largely due to the great wealth of structural patterns in the iris.
        </p>
        <p>
          The representation of iris patterns plays a decisive role in the effectiveness of a system based on
          this biometric feature. Although there are several proposals to carry out this process, this work
          proposes a new method of representation of the iris. This new proposal is based on Functional Data Analysis,
          given the continuous nature of digital images. The representation of iris images using this approach has notable
          advantages, among which the significant reduction in the size of the data stands out.
        </p>
        <p>
          In this work, an iris recognition platform is developed with the purpose of verifying the accuracy and efficiency
          of the proposed method, which includes implementations of some classical iris representation methods. The experiments
          carried out show the good performance of the proposed method, which shows certain advantages with respect to the
          classical methods implemented.
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/ryuzakyl/bsc-thesis-materials",
      },
      {
        name: "Thesis document (PDF)",
        link: "https://github.com/ryuzakyl/bsc-thesis-materials/blob/master/thesis/Iris-Recognition-using-Functional-Data-Analysis.pdf",
      },
    ],
  },
  // {
  //   category: "Open Source Tool",
  //   title: "Mongo-Action",
  //   slug: "#mongo-action",
  //   imageUrl: "img/projects/mongo-action.png",
  //   subtitle: "A  Github action which creates a mongo Docker container.",
  //   period: "March 2020",
  //   tech: "GitHub Action, NodeJS, Docker",
  //   description: (
  //     <>
  //       <p>
  //         mongo-action is a Github Action which creates a mongo Docker container
  //         using the official{" "}
  //         <a href="https://hub.docker.com/_/mongo">Dockerhub image</a>. The
  //         MongoDB instance's port will be exposed to other containers and also
  //         to the host running the Github Workflow.
  //       </p>
  //       <p>
  //         <a
  //           href="https://github.com/DigiPie/mongo-action/workflows/mongo-action%20CI/badge.svg"
  //           title="mongo-action CI"
  //         >
  //           <img src="https://github.com/DigiPie/mongo-action/workflows/mongo-action%20CI/badge.svg" />
  //         </a>
  //       </p>
  //       <p>
  //         I created this Github Action to learn more about Continuous
  //         Integration tooling, and to simplify automated testing for my own{" "}
  //         <a href="https://github.com/DigiPie/mocha-chai-mongoose">
  //           Node-ExpressJS-Mongoose
  //         </a>{" "}
  //         project.
  //       </p>
  //       <p>
  //         By using this Github Action, there is no longer a need to provision a
  //         test database on MongoDB Atlas or elsewhere. Furthermore, each test
  //         will run on a fresh, isolated copy of a MongoDB instance.
  //       </p>
  //       <p>
  //         I submitted this to the{" "}
  //         <a href="https://githubhackathon.com/">
  //           Github Hackathon for Github Actions
  //         </a>
  //         .
  //       </p>
  //     </>
  //   ),
  //   links: [
  //     {
  //       name: "GitHub repository",
  //       link: "https://github.com/DigiPie/mongo-action",
  //     },
  //     {
  //       name: "GitHub Marketplace",
  //       link: "https://github.com/marketplace/actions/mongo-action",
  //     },
  //   ],
  // },
  // {
  //   category: "Website",
  //   title: "Google Developer Student Club NUS",
  //   slug: "#dsc-nus",
  //   imageUrl: "img/projects/dscnustech.png",
  //   subtitle:
  //     "DSC NUS tech team's website for workshop registration and materials.",
  //   period: "January to March 2020",
  //   tech: "Jekyll, Bootstrap, Github pages",
  //   team: [
  //     {
  //       name: "Andre Wong",
  //       link: "https://github.com/AndreWongZH/",
  //     },
  //     {
  //       name: "Evan Tay",
  //       link: "https://github.com/DigiPie/",
  //     },
  //     {
  //       name: "Melodies Sim",
  //       link: "https://github.com/Happytreat/",
  //     },
  //   ],
  //   description: (
  //     <>
  //       <p>
  //         Developer Student Club, National University of Singapore is made up of
  //         people from diverse backgrounds, majors, years of study, genders and
  //         races. We come together to push our mission of #techforgood.
  //       </p>
  //       <p>
  //         The Technology team is responsible for the execution of DSC-NUS
  //         workshops and thematic tech events. I co-lead the team as the Deputy
  //         Head of Technology.
  //       </p>
  //       <p>
  //         We created this website to act as a one-stop portal for NUS students
  //         to find out more about our workshops, register for them, and access
  //         past workshop materials.
  //       </p>
  //     </>
  //   ),
  //   links: [
  //     {
  //       name: "GitHub repository",
  //       link: "https://github.com/dscnustech/dscnustech.github.io",
  //     },
  //     {
  //       name: "Website",
  //       link: "https://dscnustech.github.io/",
  //     },
  //   ],
  // },
  // {
  //   category: "Project",
  //   title: "DigiCourse",
  //   slug: "#digicourse",
  //   imageUrl: "img/projects/digicourse.png",
  //   subtitle: "A full-stack course platform with forum and enrolment features.",
  //   period: "September to November 2019",
  //   tech: "NodeJS, ExpressJS, PostgreSQL, Herokuapp",
  //   team: [
  //     {
  //       name: "Bryan Koh",
  //       link: "https://github.com/awarenessxz/",
  //     },
  //     {
  //       name: "Evan Tay",
  //       link: "https://github.com/DigiPie/",
  //     },
  //     {
  //       name: "Jacqueline Cheong",
  //       link: "https://github.com/Aquarinte/",
  //     },
  //     {
  //       name: "Lee Tze Ting",
  //       link: "https://github.com/halcyoneee/",
  //     },
  //   ],
  //   description: (
  //     <>
  //       <p>
  //         A course management platform where student-teacher interactions can
  //         take place seamlessly online.
  //       </p>
  //       <p>
  //         We worked on DigiCourse under National University of Singapore's{" "}
  //         <a href="https://nusmods.com/modules/CS2102/database-systems">
  //           CS2102: Database Systems
  //         </a>
  //         . It is a database-centric project which features two major
  //         components, a course enrolment system, and a forum system.
  //       </p>
  //       <p>
  //         DigiCourse is continuously deployed from Github to Herokuapp, with the
  //         aid of Heroku build-packs such as the{" "}
  //         <a href="https://github.com/DigiPie/psql-heroku-buildpack">
  //           psql-heroku-buildpack
  //         </a>
  //         . I wrote this build pack to automate the execution of a PostgreSQL
  //         setup script file on deployment to Heroku.
  //       </p>
  //     </>
  //   ),
  //   links: [
  //     {
  //       name: "GitHub repository",
  //       link: "https://github.com/DigiPie/DigiCourse",
  //     },
  //   ],
  // },
  // {
  //   category: "Project",
  //   title: "Dynalite",
  //   slug: "#dynalite",
  //   imageUrl: "img/projects/dynalite.png",
  //   subtitle:
  //     "A full-stack Internet-of-Things occupancy visualisation application.",
  //   period: "September to November 2019",
  //   tech: "Raspberry-Pi, Python, COAP, NodeJS, ExpressJS, PostgreSQL, ReactJS, Docker",
  //   team: [
  //     {
  //       name: "Evan Tay",
  //       link: "https://github.com/DigiPie/",
  //     },
  //     {
  //       name: "Joyce Yeo",
  //       link: "https://github.com/pikulet/",
  //     },
  //     {
  //       name: "Matthew Lee",
  //       link: "https://github.com/crazoter/",
  //     },
  //     {
  //       name: "Melodies Sim",
  //       link: "https://github.com/Happytreat/",
  //     },
  //   ],
  //   description: (
  //     <>
  //       <p>
  //         Dynalite is an Internet-of-Things application which performs dynamic
  //         visualisation of room occupancy.
  //       </p>
  //       <p>
  //         We worked on Dynalite under National University of Singapore's{" "}
  //         <a href="https://nusmods.com/modules/CS3103/computer-networks-practice">
  //           CS3103: Computer Networks Practice
  //         </a>
  //         . It is an Internet-of-Things application which performs dynamic
  //         visualisation of room occupancy.
  //       </p>
  //       <p>
  //         Dynalite was built using 3 Docker containers and 1 Raspberry Pi. The
  //         RPi reads light data and sends it via COAP to the first Docker
  //         container containing a backend NodeJS-ExpressJS web server.
  //       </p>
  //       <p>
  //         The backend server authenticates and stores the measurements into a
  //         PostgreSQL database stored in the second Docker container.
  //       </p>
  //       <p>
  //         The backend server also provides a HTTP REST API which is used by a
  //         frontend React web server in the third Docker container.
  //       </p>
  //     </>
  //   ),
  //   links: [
  //     {
  //       name: "GitHub repository",
  //       link: "https://github.com/DigiPie/dynalite",
  //     },
  //     {
  //       name: "Presentation Slides (PDF)",
  //       link: "https://evantay.com/pdf/dynalite.pdf",
  //     },
  //   ],
  // },
  // {
  //   category: "Open Source Tool",
  //   title: "psql-heroku-buildpack",
  //   slug: "#psql-heroku-buildpack",
  //   subtitle:
  //     "A Heroku buildpack which executes a PostgreSQL script file on deployment.",
  //   period: "September 2019",
  //   tech: "Herokuapp, PostgreSQL",
  //   description: (
  //     <>
  //       <p>
  //         psql-heroku-buildpack is a buildpack which executes a PostgreSQL
  //         script file on deployment to Heroku.
  //       </p>
  //       <p>
  //         I developed this buildpack while working on DigiCourse, a full-stack
  //         application built on PostgreSQL. I wrote this build pack to automate
  //         the execution of a PostgreSQL setup script file in the Git repo on
  //         deployment to Heroku from Github.
  //       </p>
  //     </>
  //   ),
  //   links: [
  //     {
  //       name: "GitHub repository",
  //       link: "https://github.com/DigiPie/psql-heroku-buildpack",
  //     },
  //   ],
  //   bgColor: "alternate",
  // },
  // {
  //   category: "Project",
  //   title: "BrainTrain",
  //   slug: "#braintrain",
  //   imageUrl: "img/projects/braintrain.png",
  //   subtitle:
  //     "A spaced-repetition flashcard desktop application built in Java and JUnit5.",
  //   period: "March to April 2019",
  //   tech: "Java, JUnit5, JavaFx, OpenCSV",
  //   team: [
  //     {
  //       name: "Evan Tay",
  //       link: "https://github.com/DigiPie/",
  //     },
  //     {
  //       name: "Eugene Foo",
  //       link: "https://github.com/eugenefdw/",
  //     },
  //     {
  //       name: "Lee Tze Ting",
  //       link: "https://github.com/halcyoneee/",
  //     },
  //   ],
  //   description: (
  //     <>
  //       <p>
  //         BrainTrain is a spaced-repetition flashcard application which makes
  //         memorizing easy and effective. With BrainTrain’s{" "}
  //         <a href="https://www.theguardian.com/education/2016/jan/23/spaced-repetition-a-hack-to-make-your-brain-store-information">
  //           Spaced Repetition System (SRS)
  //         </a>{" "}
  //         optimizing your flashcard revision intervals, you will be able to
  //         learn more in less time.
  //       </p>
  //       <p>
  //         <a
  //           href="https://travis-ci.org/CS2103-AY1819S2-W14-1/main"
  //           title="Build status"
  //         >
  //           <img src="https://travis-ci.org/CS2103-AY1819S2-W14-1/main.svg?branch=master" />
  //         </a>{" "}
  //         <a
  //           href="https://ci.appveyor.com/project/eugenefdw/main"
  //           title="Build status"
  //         >
  //           <img src="https://ci.appveyor.com/api/projects/status/vl6bo937loonr7x3?svg=true" />
  //         </a>{" "}
  //         <a
  //           href="https://coveralls.io/github/CS2103-AY1819S2-W14-1/main?branch=master"
  //           title="Coverage status"
  //         >
  //           <img src="https://coveralls.io/repos/github/CS2103-AY1819S2-W14-1/main/badge.svg?branch=master" />
  //         </a>{" "}
  //       </p>
  //       <p>
  //         We worked on BrainTrain under National University of Singapore's{" "}
  //         <a href="https://nusmods.com/modules/CS2103T/software-engineering">
  //           CS2103T: Software Engineering
  //         </a>
  //         . My primary responsibility was to design and develop the Card
  //         Management System. My secondary responsibility was to act as the
  //         project’s documentation lead. To find out more, view my{" "}
  //         <a href="https://digipie.github.io/BrainTrain/team/digipie.html">
  //           project portfolio page
  //         </a>
  //         .
  //       </p>
  //     </>
  //   ),
  //   links: [
  //     {
  //       name: "GitHub repository",
  //       link: "https://github.com/DigiPie/BrainTrain",
  //     },
  //     {
  //       name: "Project documentation",
  //       link: "https://digipie.github.io/BrainTrain/index.html",
  //     },
  //     {
  //       name: "Project portfolio page",
  //       link: "https://digipie.github.io/BrainTrain/team/digipie.html",
  //     },
  //   ],
  // },
  // {
  //   category: "Game",
  //   title: "Glory: Tales of Yi-Shun",
  //   slug: "#glory",
  //   imageUrl: "img/projects/glory.png",
  //   subtitle:
  //     "A 2D hack-and-slash action survival game built using Unity and C#.",
  //   period: "May to September 2018",
  //   tech: "Unity, C#",
  //   team: [
  //     {
  //       name: "Evan Tay",
  //       link: "https://github.com/DigiPie/",
  //     },
  //     {
  //       name: "Lim Xuan Hao",
  //       link: "https://github.com/Lunastryke/",
  //     },
  //   ],
  //   description: (
  //     <>
  //       <p>
  //         In Glory, you play as Yi-Shun, the last remaining swordsman of the
  //         great city of Sandosa. The undead warlord Ma Ti and his minions are
  //         advancing on the city and only you can stop them.
  //       </p>
  //       <p>
  //         We worked on this project under National University of Singapore's{" "}
  //         <a href="http://nusskylab-dev.comp.nus.edu.sg/">
  //           CP2106: Independent Software Development Project (Orbital){" "}
  //         </a>
  //         . This module was conducted during the summer break.
  //       </p>
  //       <p>
  //         We were one of the top 11 out of 211 teams which received an award
  //         (Honorable Mention), and a Google Chromecast each from Google
  //         Singapore.
  //       </p>
  //     </>
  //   ),
  //   links: [
  //     {
  //       name: "GitHub repository",
  //       link: "https://github.com/DigiPie/Glory",
  //     },
  //     {
  //       name: "Itch.io (Download and Play)",
  //       link: "https://digipie.itch.io/glory",
  //     },
  //   ],
  // },
];

export default projects;
