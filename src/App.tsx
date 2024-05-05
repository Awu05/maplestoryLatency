import Button from '@mui/material/Button';
import './App.css'
import ChannelCard from './ChannelCard'
import { ChannelObject } from './ChannelCard'

function App() {

  const channels: ChannelObject[] = [
    { "channel": 1, "ip": "35.155.204.207" },
    { "channel": 2, "ip": "52.26.82.74" },
    { "channel": 3, "ip": "34.217.205.66" },
    { "channel": 4, "ip": "35.161.183.101" },
    { "channel": 5, "ip": "54.218.157.183" },
    { "channel": 6, "ip": "52.25.78.39" },
    { "channel": 7, "ip": "54.68.160.34" },
    { "channel": 8, "ip": "34.218.141.142" },
    { "channel": 9, "ip": "52.33.249.126" },
    { "channel": 10, "ip": "54.148.170.23" },
    { "channel": 11, "ip": "54.201.184.26" },
    { "channel": 12, "ip": "54.191.142.56" },
    { "channel": 13, "ip": "52.13.185.207" },
    { "channel": 14, "ip": "34.215.228.37" },
    { "channel": 15, "ip": "54.187.177.143" },
    { "channel": 16, "ip": "54.203.83.148" },
    { "channel": 17, "ip": "54.148.188.235" },
    { "channel": 18, "ip": "52.43.83.76" },
    { "channel": 19, "ip": "54.69.114.137" },
    { "channel": 20, "ip": "54.148.137.49" },
    { "channel": 21, "ip": "54.212.109.33" },
    { "channel": 22, "ip": "44.230.255.51" },
    { "channel": 23, "ip": "100.20.116.83" },
    { "channel": 24, "ip": "54.188.84.22" },
    { "channel": 25, "ip": "34.215.170.50" },
    { "channel": 26, "ip": "54.184.162.28" },
    { "channel": 27, "ip": "54.185.209.29" },
    { "channel": 28, "ip": "52.12.53.225" },
    { "channel": 29, "ip": "54.189.33.238" },
    { "channel": 30, "ip": "54.188.84.238" },
    { "channel": 31, "ip": "44.234.162.14" },
    { "channel": 32, "ip": "44.234.162.13" },
    { "channel": 33, "ip": "44.234.161.92" },
    { "channel": 34, "ip": "44.234.161.48" },
    { "channel": 35, "ip": "44.234.160.137" },
    { "channel": 36, "ip": "44.234.161.28" },
    { "channel": 37, "ip": "44.234.162.100" },
    { "channel": 38, "ip": "44.234.161.69" },
    { "channel": 39, "ip": "44.234.162.145" },
    { "channel": 40, "ip": "44.234.162.130" },
  ]

  const channelOptions = [];

  for (let i = 0; i < channels.length; i++) {
    channelOptions.push(<ChannelCard channel={channels[i]} key={i} />)
  }

  return (
    <div style={{ width: 1300, height: 800, display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
      <Button
        variant="contained"
        onClick={() => {
          window.localStorage.clear();
          window.location.reload();
        }
        }
        style={{ marginBottom: '20px' }}
      >
        Refresh Latency
      </Button>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignContent: 'center', gap: '20px 10px' }}>
        {channelOptions}
      </div>
    </div>
  )
}

export default App
