import { useState } from "react"
import Preview from "./components/Preview"
import GeneralInformation from "./components/GeneralInf"
import Education from "./components/Education"
import { v4 as uuidv4 } from "uuid"
import ProfessionalExp from "./components/ProfessionalExp"

function App() {
  const [education, setEducation] = useState([])
  const [profExp, setProfExp] = useState([])

  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [location, setLocation] = useState("")

  const [degree, setDegree] = useState("")
  const [school, setSchool] = useState("")
  const [time, setTime] = useState("")
  const [location2, setLocation2] = useState("")

  const [job, setJob] = useState("")
  const [company, setCompany] = useState("")
  const [time2, setTime2] = useState("")
  const [location3, setLocation3] = useState("")
  const [desc, setDesc] = useState("")

  const saveEducation = () => {
    const data = {
      id: uuidv4(),
      degree,
      school,
      time,
      location2,
    }

    setEducation([...education, data])

    console.log(education)
  }

  const saveProfessionalExp = () => {
    const data = {
      id: uuidv4(),
      job,
      company,
      time2,
      location3,
      desc,
    }

    setProfExp([...profExp, data])

    console.log(profExp)
  }

  return (
    <main>
      <div className="panel">
        <GeneralInformation
          fullname={fullname}
          email={email}
          phone={phone}
          location={location}
          setFullname={setFullname}
          setEmail={setEmail}
          setPhone={setPhone}
          setLocation={setLocation}
        />
        <Education
          degree={degree}
          setDegree={setDegree}
          school={school}
          setSchool={setSchool}
          time={time}
          setTime={setTime}
          location={location2}
          setLocation={setLocation2}
          save={saveEducation}
        />
        <ProfessionalExp
          job={job}
          setJob={setJob}
          company={company}
          setCompany={setCompany}
          time={time2}
          setTime={setTime2}
          location={location3}
          setLocation={setLocation3}
          desc={desc}
          setDesc={setDesc}
          save={saveProfessionalExp}
        />
      </div>
      <Preview
        fullname={fullname}
        email={email}
        phone={phone}
        location={location}
        education={education}
        profExp={profExp}
      />
    </main>
  )
}

export default App
