import PropTypes from "prop-types"
import "../styles/editingmodal.css"
import { Check, X } from "lucide-react"

export default function EditingModal({
  type,
  isOpen,
  saveEd,
  degree,
  setDegree,
  school,
  setSchool,
  time,
  setTime,
  location2,
  setLocation2,
  saveProfExp,
  job,
  setJob,
  company,
  setCompany,
  time2,
  setTime2,
  location3,
  setLocation3,
  desc,
  setDesc,
  close,
}) {
  return (
    <dialog open={isOpen}>
      <header>
        <h2>Edit {type}</h2>
        <button onClick={() => close()}>
          <X />
        </button>
      </header>
      <ul>
        {type === "Education" ? (
          <>
            <li>
              <label htmlFor="degree">Degree</label>
              <input
                type="text"
                id="degree"
                value={degree}
                onChange={(ev) => {
                  setDegree(ev.target.value)
                }}
              />
            </li>
            <li>
              <label htmlFor="school">School</label>
              <input
                type="text"
                id="school"
                value={school}
                onChange={(ev) => {
                  setSchool(ev.target.value)
                }}
              />
            </li>
            <li>
              <label htmlFor="time">Time</label>
              <input
                type="text"
                id="time"
                value={time}
                onChange={(ev) => {
                  setTime(ev.target.value)
                }}
              />
            </li>
            <li>
              <label htmlFor="location2">Location (city, country)</label>
              <input
                type="text"
                id="location2"
                value={location2}
                onChange={(ev) => {
                  setLocation2(ev.target.value)
                }}
              />
            </li>
            <button className="savebtn" onClick={saveEd}>
              Save <Check className="icon" />
            </button>
          </>
        ) : type === "Prof. Experience" ? (
          <>
            <li>
              <label htmlFor="job">Job</label>
              <input
                type="text"
                id="job"
                value={job}
                onChange={(ev) => {
                  setJob(ev.target.value)
                }}
              />
            </li>
            <li>
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                value={company}
                onChange={(ev) => {
                  setCompany(ev.target.value)
                }}
              />
            </li>
            <li>
              <label htmlFor="time">Time</label>
              <input
                type="text"
                id="time"
                value={time2}
                onChange={(ev) => {
                  setTime2(ev.target.value)
                }}
              />
            </li>
            <li>
              <label htmlFor="location3">Location (city, country)</label>
              <input
                type="text"
                id="location3"
                value={location3}
                onChange={(ev) => {
                  setLocation3(ev.target.value)
                }}
              />
            </li>
            <li>
              <label htmlFor="desc">Description</label>
              <input
                type="text"
                id="desc"
                value={desc}
                onChange={(ev) => {
                  setDesc(ev.target.value)
                }}
              />
            </li>
            <button className="savebtn" onClick={() => saveProfExp()}>
              Save <Check className="icon" />
            </button>
          </>
        ) : null}
      </ul>
    </dialog>
  )
}

EditingModal.propTypes = {
  type: PropTypes.string,
  setIsOpen: PropTypes.func,
  isOpen: PropTypes.bool,
  saveEd: PropTypes.func,
  saveProfExp: PropTypes.func,
  degree: PropTypes.string,
  setDegree: PropTypes.func,
  school: PropTypes.string,
  setSchool: PropTypes.func,
  time: PropTypes.string,
  setTime: PropTypes.func,
  location2: PropTypes.string,
  setLocation2: PropTypes.func,
  company: PropTypes.string,
  setCompany: PropTypes.func,
  job: PropTypes.string,
  setJob: PropTypes.func,
  time2: PropTypes.string,
  setTime2: PropTypes.func,
  location3: PropTypes.string,
  setLocation3: PropTypes.func,
  desc: PropTypes.string,
  setDesc: PropTypes.func,
  save: PropTypes.func,
  close: PropTypes.func,
}
