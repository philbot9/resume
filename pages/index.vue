<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h2 class="title has-text-centered" id="nav_profile">Profile</h2>
          <ul>
            <li>Passionate mid-level developer with 3+ years of professional experience in web and mobile development</li>
            <li>Skilled at delivering high-quality software solutions driven by customer requirements</li>
            <li>Proficient in producing readable and test-able code in high-pressure environments</li>
            <li>Self-motivated independent worker and personable team-player</li>
            <li>A fast learner committed to investing in interesting projects and enhancing and developing new skills</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="title has-text-centered" id="nav_work">Work Experience</h2>

        <hr />

        <TimeLineElement
          title="Software Developer"
          subtitle="05/2017 - Present"
          infoTitle="FaveQuest Inc"
          location="Ottawa"
        >
          <ul>
            <li>Developed a complex customisable Cordova mobile application with React</li>
            <li>Implemented a Progressive Web App with offline support based on the Cordova mobile application</li>
            <li>Communicated directly with customers to gather requirements for custom app features, creating mockups for early feedback</li>
            <li>Worked on a Node.js backend with a GraphQL API as well as the mobile GraphQL client</li>
            <li>Added new features to the legacy PHP CMS and API</li>
            <li>Implemented an automated build and submission pipeline for Android and iOS applications using browser automation</li>
          </ul>
        </TimeLineElement>

        <hr />

        <TimeLineElement
          title="Part-time Software Developer"
          subtitle="03/2015 - 05/2017"
          infoTitle="FaveQuest Inc"
          location="Ottawa"
        >
          <ul>
            <li>Developed web scrapers to pull data into the CMS</li>
            <li>Enhanced the efficiency and reliability of the scraping platform</li>
            <li>Integrated many disparate third-party data sources into the CMS</li>
            <li>Developed a web application for monitoring scrapers in real-time</li>
          </ul>
        </TimeLineElement>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h1 class="title has-text-centered" id="nav_contracts">Professional Contracts</h1>

        <hr />

        <TimeLineElement subtitle="2018 - 2019" infoTitle="smartAudio GmbH" location="Germany">
          <ul>
            <li>Designed and implemented mobile Android and iOS applications in React Native to facilitate push-to-talk voice communication with a customised Bluetooth headset for police services</li>
            <li>Created a design specification for a wirelesss communication protocol between the mobile application and Bluetooth headset via BLE</li>
          </ul>
        </TimeLineElement>

        <hr />

        <TimeLineElement
          subtitle="2016 & 2019"
          infoTitle="University of Alberta"
          location="Edmonton"
        >
          <ul>
            <li>Designed and implemented software programs to produce digital data sets from social media and other websites used in quantitative and qualitative analysis in Health and Law research</li>
          </ul>
        </TimeLineElement>
      </div>
    </section>

    <div class="hero is-primary">
      <div class="hero-body"></div>
    </div>

    <section class="section">
      <div class="container">
        <h1 class="title has-text-centered" id="nav_education">Education</h1>

        <hr />

        <TimeLineElement
          title="Carleton University"
          subtitle="09/2014 - 05/2017"
          infoTitle="BSc (Hons.) in Computer Science – Software Engineering"
          location="Ottawa"
        >
          <ul>
            <li>Graduated with High Distinction</li>
            <li>Relevant coursework:</li>
            <ul>
              <li>Agile Development Methodologies</li>
              <li>Human Computer Interaction</li>
              <li>Functional Programming</li>
              <li>C-Programming in a Linux environment</li>
            </ul>
          </ul>
        </TimeLineElement>

        <hr />

        <TimeLineElement
          title="Cork Institute of Technology"
          subtitle="09/2012 - 05/2014"
          infoTitle="BSc (Hons.) in Software Development & Computer Networking"
          location="Cork, Ireland"
        >
          <ul>
            <li>Transferred to Carleton University after 2nd year</li>
            <li>Relevant coursework:</li>
            <ul>
              <li>Networking using industry-grade Cisco equipment</li>
              <li>Requirements Engineering and OO-Analysis and Design</li>
            </ul>
          </ul>
        </TimeLineElement>
      </div>
    </section>

    <div class="hero is-primary">
      <div class="hero-body"></div>
    </div>

    <section class="section">
      <div class="container">
        <h1 class="title has-text-centered" id="nav_skills">Skill Levels</h1>
        <hr />

        <div class="columns is-8">
          <div class="column">
            <SkillIndicator
              title="JavaScript"
              subtitle="React, Node.js"
              value="100"
              level="Professional"
            />

            <SkillIndicator
              title="HTML & CSS"
              subtitle="MaterializeCSS"
              value="100"
              level="Professional"
            />

            <SkillIndicator
              title="Mobile Development"
              subtitle="React Native, Cordova"
              value="100"
              level="Professional"
            />

            <SkillIndicator
              title="Test Driven Development"
              subtitle="Jest, Enzyme"
              value="100"
              level="Professional"
            />
          </div>

          <div class="column">
            <SkillIndicator
              title="Linux Server Administration"
              subtitle="LAMP & MERN stacks"
              value="80"
              level="Intermediate"
            />

            <SkillIndicator
              title="Database Management"
              subtitle="MySQL, MongoDB"
              value="80"
              level="Intermediate"
            />

            <SkillIndicator
              title="CI / CD"
              subtitle="Jenkins, Docker"
              value="80"
              level="Intermediate"
            />

            <SkillIndicator
              title="Embedded / IoT"
              subtitle="Arduino, RaspberryPi"
              value="60"
              level="Limited"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h2 class="title has-text-centered" id="nav_contact">Contact</h2>
          <div class="columns">
            <div class="column is-half is-offset-one-quarter has-text-centered">
              <h3 class="is-size-5">Philip Klostermann</h3>
              <p>
                <b-icon type icon="home" size="is-small" />&nbsp;
                2-52 Pinehurst Ave, Ottawa ON K1Y 1K4
              </p>

              <p>
                <b-icon type icon="phone" size="is-small" />&nbsp;
                <a class="has-text-white" href="tel:6138049307">(613) 804-9307</a>
              </p>

              <p>
                <b-icon type icon="envelope" size="is-small" />&nbsp;
                <a
                  class="has-text-white"
                  href="mailto:philip.klostermann@gmail.com"
                >philip.klostermann@gmail.com</a>
              </p>

              <p>
                <br />
                <b-icon type icon="github" size="is-small" />&nbsp;
                <a
                  class="has-text-white"
                  target="_blank"
                  href="https://github.com/philbot9"
                >philbot9</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TimeLineElement from '~/components/TimeLineElement'
import SkillIndicator from '~/components/SkillInidicator'

export default {
  components: {
    TimeLineElement,
    SkillIndicator
  }
}
</script>

<style>
.has-spaced-navbar-fixed-top {
  padding-top: 3.25rem;
}

ul {
  list-style: disc;
  margin: 0 0 0 1em;
  padding: 1em;
}

ul ul {
  list-style: circle;
  padding: 0;
}

li {
  margin-bottom: 0.5em;
}

.columns.is-8 > .column {
  padding: 2rem;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
