import React from 'react'
import { ProgressCircle } from 'react-native-svg-charts'

class ProgressCircleExample extends React.PureComponent {

    render() {

        return (
            <ProgressCircle
                style={ { height: 60 } }
                progress={ 0.6 }
                progressColor={"#B4C0FE"}
                startAngle={ -Math.PI * 1 }
                endAngle={ Math.PI * 1 }
            />
        )
    }

}

export default ProgressCircleExample
