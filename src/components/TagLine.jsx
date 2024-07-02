import brackets from '../assets/svg/Brackets';

const TagLine = ({className, children}) => {
  return (
    <div className={`${className} tagline flex items-center gap-2`}>
      {brackets('left')}
      {children}
      {brackets('right')}
    </div>
  )
}

export default TagLine
