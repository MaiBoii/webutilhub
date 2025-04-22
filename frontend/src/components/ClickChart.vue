<template>
    <div>
      <Bar :data="chartData" :options="chartOptions" />
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import { Bar } from 'vue-chartjs'
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  } from 'chart.js'
  
  // Chart.js 컴포넌트 등록
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  const chartData = ref({
    labels: [] as string[],
    datasets: [
      {
        label: '클릭 수',
        backgroundColor: '#4F46E5',
        data: [] as number[],
      }
    ]
  })
  
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      },
      title: {
        display: true,
        text: 'URL 클릭 수 분석'
      }
    }
  }
  
  // 데이터 가져오기
  onMounted(async () => {
    try {
      const res = await fetch('/api/stats')
      const data = await res.json()
  
      chartData.value.labels = data.urls
      chartData.value.datasets[0].data = data.clicks
    } catch (err) {
      console.error('차트 데이터를 불러오지 못했습니다:', err)
    }
  })
  </script>
  