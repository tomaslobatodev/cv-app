import { useState } from "react"
import Preview from "./components/Preview"
import GeneralInformation from "./components/GeneralInf"
import Education from "./components/Education"
import { v4 as uuidv4 } from "uuid"
import ProfessionalExp from "./components/ProfessionalExp"
import EditingModal from "./components/EditingModal"

export default function App() {
  const [education, setEducation] = useState([])
  const [profExp, setProfExp] = useState([])

  const [editOpen, setEditOpen] = useState(false)
  const [editingEd, setEditingEd] = useState("")
  const [editingProfExp, setEditingProfExp] = useState("")

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
    if (degree !== "" && school !== "" && time !== "" && location2 !== "") {
      const data = {
        id: uuidv4(),
        degree,
        school,
        time,
        location2,
      }

      setEducation([...education, data])
      setDegree("")
      setSchool("")
      setTime("")
      setLocation2("")
    }
  }

  const saveProfessionalExp = () => {
    if (job !== "" && company !== "" && time2 !== "" && location3 !== "") {
      const data = {
        id: uuidv4(),
        job,
        company,
        time2,
        location3,
        desc,
      }

      setProfExp([...profExp, data])
      setJob("")
      setCompany("")
      setTime2("")
      setLocation3("")
      setDesc("")
    }
  }

  const closeModal = () => {
    setEditOpen(false)
    setEditingEd("")
    setEditingProfExp("")
  }

  const editEd = (id) => {
    setEditOpen(true)
    setEditingEd(id)

    const card = education.find((card) => card.id === id)

    setDegree(card.degree)
    setSchool(card.school)
    setTime(card.time)
    setLocation2(card.location2)
  }

  const editProfExp = (id) => {
    setEditOpen(true)
    setEditingProfExp(id)

    const card = profExp.find((card) => card.id === id)

    setJob(card.job)
    setCompany(card.company)
    setTime2(card.time2)
    setLocation3(card.location3)
    setDesc(card.desc)
  }

  const saveEditEd = () => {
    const updatedEducation = education.map((card) => {
      if (card.id === editingEd) {
        return {
          id: card.id,
          degree,
          school,
          time,
          location2,
        }
      }

      setEditingEd("")

      return card
    })

    setDegree("")
    setSchool("")
    setTime("")
    setLocation2("")

    setEducation(updatedEducation)
    setEditOpen(false)
    setEditingEd("")
  }

  const saveEditProfExp = () => {
    const updatedProfExp = profExp.map((card) => {
      if (card.id === editingProfExp) {
        return {
          id: card.id,
          job,
          company,
          time2,
          location3,
          desc,
        }
      }
      return card
    })

    setJob("")
    setCompany("")
    setTime2("")
    setLocation3("")
    setDesc("")

    setProfExp(updatedProfExp)
    setEditOpen(false)

    setProfExp(updatedProfExp)
    setEditOpen(false)
    setEditingProfExp("")
  }

  const removeEd = (id) => {
    const newEducation = education.filter((card) => card.id !== id)
    setEducation(newEducation)
  }

  const removeProfExp = (id) => {
    const newProfExp = profExp.filter((card) => card.id !== id)
    profExp(newProfExp)
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
          education={education}
          save={saveEducation}
          edit={editEd}
          remove={removeEd}
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
          profExp={profExp}
          save={saveProfessionalExp}
          edit={editProfExp}
          remove={removeProfExp}
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

      {editingEd !== "" ? (
        <EditingModal
          type="Education"
          isOpen={editOpen}
          saveEd={saveEditEd}
          degree={degree}
          setDegree={setDegree}
          school={school}
          setSchool={setSchool}
          time={time}
          setTime={setTime}
          location2={location2}
          setLocation2={setLocation2}
          close={closeModal}
        />
      ) : editingProfExp !== "" ? (
        <EditingModal
          type="Prof. Experience"
          isOpen={editOpen}
          saveProfExp={saveEditProfExp}
          job={job}
          setJob={setJob}
          company={company}
          setCompany={setCompany}
          time2={time2}
          setTime2={setTime2}
          location3={location3}
          setLocation3={setLocation3}
          desc={desc}
          setDesc={setDesc}
          close={closeModal}
        />
      ) : null}
    </main>
  )
}
