import "./App.css"
import Section from "./components/Section";

function App() {
  return (
    <main>
      <div className="panel">
        <Section title="General Information" inputs={[{ id: "fullname", name: "Full name" }, { id:"email", name:"E-Mail"}, {id:"phone", name:"Phone"}, {id:"location", name:"Location (city, country)"}]} />
        <Section title="Education" inputs={[{ id: "degree", name: "Degree" }, { id: "school", name: "School" }, { id: "location2", name: "Location" }]}></Section>
        <Section title="Professional Experience" inputs={[{id: "job", name: "Job"}, {id:"company", name:"Company"}, {id:"description", name: "Description"}]}></Section>
      </div>

      <div className="preview"></div>
    </main>
  )
}

export default App
