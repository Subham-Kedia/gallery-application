import React, {useEffect} from 'react'
import { Animated, useAnimatedValue } from 'react-native'

const FadeInView = ({style, children}) => {
    const fadeAnim = useAnimatedValue(0);

    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      }).start();
    }, [fadeAnim]);

  return (
    <Animated.View style={{...style, opacity: fadeAnim}}>
      {children}
    </Animated.View>
  )
}

export default FadeInView
