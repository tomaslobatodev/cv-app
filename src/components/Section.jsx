import { useState } from "react"

export default function Section({
  title,
  inputs = [{ id: "id", name: "name" }],
}) {
  const [dropped, setDropped] = useState(false)

  const handleInputChange = (id, value) => {
    document.querySelector(`.${id}`).textContent = value
  }

  return (
    <>
      <h2>
        <button
          className="dropdownbtn"
          onClick={() => {
            dropped ? setDropped(false) : setDropped(true)
          }}
        >
          {dropped ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          )}
        </button>
        {title}
      </h2>
      {dropped ? (
        <ul>
          {inputs.map((input) => {
            return (
              <li key={input.id}>
                <label htmlFor={input.id}>{input.name}</label>
                <input
                  type="text"
                  id={input.id}
                  onChange={(e) => handleInputChange(input.id, e.target.value)}
                />
              </li>
            )
          })}
        </ul>
      ) : null}
    </>
  )
}
