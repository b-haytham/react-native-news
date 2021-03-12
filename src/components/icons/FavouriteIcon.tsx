import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function FavouriteIcon(props: SvgProps) {
  return (
    <Svg  viewBox="0 0 512 512" {...props}>
      <Path d="M76.8 0v512L256 435.2 435.2 512V0H76.8zm262.212 236.989L255.999 320l-83.011-83.011c-22.924-22.924-22.924-60.088 0-83.012 22.922-22.922 60.088-22.924 83.011 0 22.924-22.922 60.09-22.924 83.013 0 22.923 22.923 22.922 60.089 0 83.012z" />
    </Svg>
  )
}

export default FavouriteIcon
