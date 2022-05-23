import React from 'react'
import { PieChart } from 'react-native-svg-charts'


class PizzaHome extends React.PureComponent {

    render() {

        const data = [
            {
                key: 1,
                value: 0,
                svg: { fill: '#FFFFFF' },
               
            },
            {
                key: 2,
                value: 0,
                svg: { fill: '#FFFFFF' }
            },
            {
                key: 3,
                value: 50,
                svg: { fill: '#FFFFFF' }
            },
            {
                key: 4,
                value: 19,
                svg: { fill: '#C58BF2' },
                arc: { outerRadius: '120%', cornerRadius: 0,  }
            },
            {
                key: 5,
                value: 0,
                svg: { fill: '#FFFFFF' }
                
            }
        ]


        return (
            <PieChart
                style={{ height: 125 }}
                outerRadius={'70%'}
                innerRadius={0}
                data={data}
            />
        )
    }

}

export default PizzaHome