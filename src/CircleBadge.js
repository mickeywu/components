import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {withSystemProps, COMMON} from './system-props'

const ICON_CLASS = 'CircleBadge-icon'

const CircleBadge = ({is: Tag = 'div', size = 'medium', bg, children, className, ...rest}) => {
  const mappedChildren = React.Children.map(children, child => {
    let {className = ''} = child.props
    if (!className.includes(ICON_CLASS)) {
      className = classnames(ICON_CLASS, className)
    }
    return React.cloneElement(child, {className})
  })
  const classes = classnames(className, 'CircleBadge', `CircleBadge--${size}`, bg && `bg-${bg}`)
  return (
    <Tag className={classes} {...rest}>
      {mappedChildren}
    </Tag>
  )
}

CircleBadge.propTypes = {
  alt: PropTypes.string,
  bg: PropTypes.string,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  src: PropTypes.string
}

export default withSystemProps(CircleBadge, COMMON)