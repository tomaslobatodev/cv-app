import "./App.css"
import Section from "./components/Section"

function App() {
  return (
    <main>
      <div className="panel">
        <Section
          title="General Information"
          inputs={[
            { id: "fullname", name: "Full name" },
            { id: "email", name: "E-Mail" },
            { id: "phone", name: "Phone" },
            { id: "location", name: "Location (city, country)" },
          ]}
        />
        <Section
          title="Education"
          inputs={[
            { id: "degree", name: "Degree" },
            { id: "school", name: "School" },
            { id: "location2", name: "Location" },
            { id: "time", name: "Time (jan 2000 - oct 2023)"}
          ]}
        ></Section>
        <Section
          title="Professional Experience"
          inputs={[
            { id: "job", name: "Job" },
            { id: "company", name: "Company" },
            { id: "time2", name: "Time"},
            { id: "location3", name: "Location"},
            { id: "description", name: "Description" },
          ]}
        ></Section>
      </div>

      <div className="preview">
        <header>
          <h2 className="fullname"></h2>
          <div>
            <span className="email"></span>
            <span className="phone"></span>
            <span className="location"></span>
          </div>
        </header>
        <div>
          <h3>Education</h3>
          <div>
            <p>
              <b className="degree">Degree</b>,{" "}
              <i className="school">School</i>
            </p>
            <p className="time-location">
              <b className="time">dec 2007 - dec 2107</b> {" "}
              <span className="location2">Location</span>
            </p>
          </div>
        </div>

        <div className="professional-experience">
          <h3>Professional Experience</h3>
          <div>
            <p>
              <b className="job">Job</b>,{" "}
              <i className="company">Company</i>
            </p>
            <p className="time-location">
              <b className="time2">dec 2007 - dec 2107</b> {" "}
              <span className="location3">Location</span>
            </p>
          </div>
          <p className="description">
            description
          </p>
        </div>
      </div>
    </main>
  )
}

export default App
