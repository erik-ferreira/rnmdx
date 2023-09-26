import { Text, View } from "react-native"
import { RenderMdx } from "rn-mdx"

import contentMdx from "./context.mdx"
import { MyComponente } from "./MyComponente"

import { styles } from "./styles"

export default function App() {
  return (
    <View style={styles.container}>
      <RenderMdx
        components={{ View, Text, MyComponente }}
        componentStyle={{ linkLabel: { color: "blue" } }}
      >
        {/* {contentMdx} */}
        {`
          ## Markdown Here

          <View style={{ backgroundColor: 'gray', padding: 24, borderRadius: 8 }}>
            <Text>Teste</Text>
            
            <MyComponente />
          </View>

        `}
      </RenderMdx>
    </View>
  )
}
