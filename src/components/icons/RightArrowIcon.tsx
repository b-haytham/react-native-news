import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function RightArrowIcon(props: SvgProps) {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Path d="M256 0C114.837 0 0 114.837 0 256s114.837 256 256 256 256-114.837 256-256S397.163 0 256 0zm79.083 271.083L228.416 377.749A21.275 21.275 0 01213.333 384a21.277 21.277 0 01-15.083-6.251c-8.341-8.341-8.341-21.824 0-30.165L289.835 256l-91.584-91.584c-8.341-8.341-8.341-21.824 0-30.165s21.824-8.341 30.165 0l106.667 106.667c8.341 8.341 8.341 21.823 0 30.165z" />
    </Svg>
  )
}

export default RightArrowIcon
