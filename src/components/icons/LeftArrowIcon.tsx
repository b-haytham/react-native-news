import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function LeftArrowIcon(props: SvgProps) {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Path d="M256 0C114.837 0 0 114.837 0 256s114.837 256 256 256 256-114.837 256-256S397.163 0 256 0zm57.749 347.584c8.341 8.341 8.341 21.824 0 30.165A21.275 21.275 0 01298.666 384a21.277 21.277 0 01-15.083-6.251L176.917 271.083c-8.341-8.341-8.341-21.824 0-30.165l106.667-106.667c8.341-8.341 21.824-8.341 30.165 0s8.341 21.824 0 30.165L222.165 256l91.584 91.584z" />
    </Svg>
  )
}

export default LeftArrowIcon
