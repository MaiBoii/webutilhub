<!-- src/components/StatsChart.vue -->
<template>
    <div>
      <h3>URL 클릭 통계</h3>
      <Bar :data="chartData" :options="chartOptions" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  // Chart.js 컴포넌트 등록
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  // 데이터 예시
  const chartData = ref({
    labels: ['url1', 'url2', 'url3'], // 클릭된 단축 URL들
    datasets: [
      {
        label: '클릭수',
        data: [12, 19, 3], // 각 URL의 클릭수
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  })
  
  const chartOptions = ref({
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'URL 단축 서비스 클릭 통계',
      },
    },
  })
  
  // 데이터를 API에서 받아오거나 실제 값으로 채우는 부분
  onMounted(() => {
    // 여기에 API 호출 로직을 넣어서 chartData를 업데이트할 수 있어
  })
  </script>
  