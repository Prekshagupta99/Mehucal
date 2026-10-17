import PropTypes from 'prop-types';
import '../Title/Title.css';

const Title = ({ subTitle, title, name }) => {
  return (
    <div className='title' name={name}>
      <h2>{subTitle}</h2>
      <p>{title}</p>
    </div>
  );
};

Title.propTypes = {
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string,
};

export default Title;
