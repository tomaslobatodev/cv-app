import PropTypes from "prop-types"

export default function Preview({
  generalData,
  educationData,
  professionalData,
}) {
  return <div className="preview">

  </div>
}

Preview.propTypes = {
  generalData: PropTypes.string.isRequired,
  educationData: PropTypes.array.isRequired,
  professionalData: PropTypes.func.isRequired,
}
