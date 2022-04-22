import { Chart } from 'react-google-charts';

const CologneChart = () => {
	const chartOptions = {
		title: 'Cologne Effectiveness',
		pieHole: 0.6,
		slices: [
			{
				color: '#96202A',
			},
			{
				color: '#2B2B2B',
			},
			{
				color: '#96202A',
			},
			{
				color: '#96202A',
			},
		],
		legend: {
			position: 'bottom',
			alignment: 'center',
			textStyle: {
				color: '233238',
				fontSize: 14,
			},
		},
		tooltip: {
			showColorCode: true,
		},
		chartArea: {
			left: 0,
			top: '10px',
			width: '100%',
			height: '80%',
		},
	};
	return (
		<Chart
			chartType="PieChart"
			data={[
				['Age', 'Weight'],
				['Other Times', 40],
				['Works Every Time', 60],
			]}
			options={chartOptions}
			graph_id="PieChart"
			width="100%"
			height="400px"
			legend_toggle
		/>
	);
};
export default CologneChart;
