import { useState, useEffect } from "react"
import styles from './BarChart.module.css'
import { Bar } from 'react-chartjs-2'
import{
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function Barchart(){

    const [chartData, setChartData] = useState({
        datasets:[]
    })

    const [chartOptions, setChartOptions] = useState({})


    useEffect(() => {
        setChartData({
            labels: ["Sun","Mon", "Tues","Wed","Thurs","Fri","Sat"],
            datasets: [
                {
                    label: 'Sale $',
                    data: [13253, 15435, 19283,14163,24124,16924,25253],
                    borderColor: 'rgb(53,163,235)',
                    backgroundColor: 'rgba(53,163,235,0.4)'
                }
            ]
        })
        setChartOptions({
            plugins: {
                legend:{
                position: top
            },
            title: {
                display:true,
                text:"Daily Revenue"
            },
        },
        maintainAspectRatio: false,
        respomsive: true
    })

    

    },[])

    return(
        <>
        <div className={styles.container}>
            <Bar data={chartData} options={chartOptions}/>
        </div>
        </>
    )
}