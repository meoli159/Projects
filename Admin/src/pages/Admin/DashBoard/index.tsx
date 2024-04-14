import { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { getRevenues } from '../../../apis/revenue';
import { useDispatch, useSelector } from 'react-redux';
import { GetListSuccess } from '../../../redux/revenue/RevenueSlice';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
import { Revenue } from '../../../types/revenue';
type RevenueState = {
  revenue: Revenue[];
};
export function Dashboard() {
  const revenues = useSelector((state: { revenue: RevenueState }) => state.revenue.revenue);
  const formatDate = (dateString: Date) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    getRevenues().then((data) => dispatch(GetListSuccess(data)));
  }, [dispatch]);
  const label = revenues.map((data) => formatDate(data.date));
  const amount = revenues.map((data) => data.amount);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  // const label = ['a', 'b', 'c'];
  const data = {
    labels: label,
    datasets: [
      {
        label: 'Revenue',
        data: amount,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return (
    <div>
      Dashboard
      <div>
        <Line options={options} data={data} />
      </div>
    </div>
  );
}
