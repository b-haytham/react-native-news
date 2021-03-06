import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function SaveIcon(props: SvgProps) {
  return (
    <Svg
      height={512}
      viewBox="0 0 512.007 512.007"
      width={512}
      {...props}
    >
      <Path d="M142 143.003h139v-143H127v128c0 8.271 6.729 15 15 15zM345 128.003v-128h-34v143h19c8.271 0 15-6.729 15-15zM127 512.003h218v-161H127z" />
      <Path d="M511.927 126.537a15.025 15.025 0 00-3.315-8.027c-.747-.913 6.893 6.786-114.006-114.113A15.111 15.111 0 00383.994.003h-8.995v128c0 24.813-20.187 45-45 45h-188c-24.813 0-45-20.187-45-45v-128h-52c-24.813 0-45 20.187-45 45v422c0 24.813 20.187 45 45 45h52v-210c0-24.813 20.187-45 45-45h188c24.813 0 45 20.187 45 45v210h92c24.813 0 45-20.187 45-45 .001-364.186.041-339.316-.072-340.466z" />
      <Path d="M330 287.003H142c-8.271 0-15 6.729-15 15v19h218v-19c0-8.271-6.729-15-15-15z" />
    </Svg>
  )
}

export default SaveIcon
