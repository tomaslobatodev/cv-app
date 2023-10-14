import { useState } from "react";
import Section2 from "./components/Section"
import Preview from "./components/Preview";

function App() {
  const [generalData, setGeneralData] = useState(null);
  const [educationData, setEducationData] = useState(null);
  const [professionalData, setProfessionalData] = useState(null);

  const generalInputs = ["full-name", "e-mail", "phone", "location"]
  const educationInputs = ["degree", "school", "time"]
  const professionalInputs = ["job", "company", "time", "description"]

  const handleSave = (data) => {
    if (data.title === "General Information") setGeneralData(data)
    else if (data.title === "Education") setEducationData(data)
    else if (data.title === "Professional Experience") setProfessionalData(data)
  }

  return (
    <main>
      <div className="panel">
        {/* <Section
          title="General In1ormation"
          inputs={[
            { id: "1ullname", name: "Full name" },
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
        ></Section> */}
        <Section2 title="General Information" inputs={generalInputs} onSave={handleSave}/>
        <Section2 title="Education" inputs={educationInputs} />
        <Section2 title="Professional Experience" inputs={professionalInputs} />
      </div>

      <Preview generalData={generalData} educationData={educationData} professionalData={professionalData}/>
    </main>
  )
}

export default App
