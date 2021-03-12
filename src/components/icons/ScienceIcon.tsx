import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"

function ScienceIcon(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 53.657 53.657"
      {...props}
    >
      <Circle cx={30.06} cy={6.457} r={3.232} />
      <Circle cx={36.525} cy={2.586} r={2.586} />
      <Path d="M47.386 44.12L33.939 22.619v-6.457h3.879v-4.525h-21.98v4.525h3.879v6.457L6.27 44.12a6.465 6.465 0 005.69 9.537h29.737a6.465 6.465 0 005.689-9.537zm-30.822-7.926l7.678-12.277v-7.756h5.172v7.756l7.678 12.277H16.564z" />
    </Svg>
  )
}

export default ScienceIcon
