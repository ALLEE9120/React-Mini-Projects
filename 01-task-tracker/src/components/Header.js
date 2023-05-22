import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onNew, showNew}) => {
  return (
    <header className='header'>
      <h1>{showNew ? "Create New Task" : title}</h1>
      <Button color={showNew ? 'red' : 'green'} text={showNew ? 'Close' : 'Add'} onClick={onNew}/>
    </header>
  )
}

Header.defaultProps = {
  title: 'TO DO LIST'
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header
