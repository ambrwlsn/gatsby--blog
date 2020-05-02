// Hide content while keeping it accessible for users of assistive technologies.
// See: http://hugogiraudel.com/2016/10/13/css-hide-and-seek/
// See: https://github.com/twbs/bootstrap/pull/25197
export const visuallyHidden = {
  borderTopWidth: '0 !important',
  borderRightWidth: '0 !important',
  borderBottomWidth: '0 !important',
  borderLeftWidth: '0 !important',
  clip: 'rect(1px, 1px, 1px, 1px) !important',
  height: '1px !important',
  overflow: 'hidden !important',
  paddingTop: '0 !important',
  paddingRight: '0 !important',
  paddingBottom: '0 !important',
  paddingLeft: '0 !important',
  position: 'absolute !important',
  whiteSpace: 'nowrap !important',
  width: '1px !important',
}

export const expandHitbox = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 10,
}
