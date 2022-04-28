import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  previewImg: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  peopleCount: PropTypes.arrayOf(PropTypes.number),
  duration: PropTypes.number.isRequired,
}).isRequired;
