import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Reboot from './assets/Reboot.png'
import { useEffect, useState } from 'react';


export interface ChannelObject {
    channel: number,
    ip: string,
}

interface Props {
    channel: ChannelObject,
}


function ajax(urlString: string, callback: ((this: XMLHttpRequest, ev: ProgressEvent) => unknown) | null) { // Url, Callback, just a placeholder
    const c = new XMLHttpRequest;
    c.open('GET', urlString);
    c.onload = callback;
    c.send()
}

function randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
}

function measure(ip: string, start: number, setLatency: (delay: number) => void) {
    const randPort: number = randomNumber(8500, 8700);
    ajax(`${ip}:${randPort}`, function () {
        const delay: number = Date.now() - start;
        setLatency(Math.trunc(delay));
    });
}

// function measure(ip: string, start: number, setLatency: (delay: number) => void) {
//     const randPort: number = randomNumber(8500, 8700);
//     const fetchRes = fetch(`${ip}:${randPort}`);
//     fetchRes
//         .then(() => {
//             const delay: number = Date.now() - start;
//             console.log('delay: ', delay)
//             setLatency(Math.trunc(delay));
//         })
//         .catch(() => {
//             const delay: number = Date.now() - start;
//             console.log('delay: ', delay)
//             setLatency(Math.trunc(delay));
//         })
// }

function latencyColor(latency: number) {
    if (latency <= 90) {
        //Green
        return '#00ff83'
    } else if (latency > 90 && latency <= 115) {
        //Blue
        return '#71c7ec'
    } else if (latency > 115) {
        //Red
        return '#f87c7c'
    } else {
        //White
        return '#fffff4'
    }
}

export default function ChannelCard(props: Props) {
    const { channel } = props
    const [_, setStart] = useState<number>();
    const [latency, setLatency] = useState<number>();

    useEffect(() => {
        const startTime = Date.now();
        setStart(startTime)
        measure(channel.ip, startTime, setLatency);
    }, []);


    return (
        <Box sx={{ height: 125, width: 205 }}>
            <Card
                variant="outlined"
                //@ts-expect-error latency will be a number
                style={{ border: latency >= 130 ? `3px solid #ffd656` : '' }}
            >
                <CardContent>
                    <div
                        style={{ display: 'flex' }}
                    >
                        <Box
                            component="img"
                            sx={{
                                height: 25,
                                width: 25,
                                paddingRight: 2
                            }}
                            alt="Reboot Icon"
                            src={Reboot}
                        />
                        <Typography variant="h5" component="div">
                            Channel {channel.channel}
                        </Typography>
                    </div>
                    <div
                        style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
                    >
                        <Typography>
                            {channel.ip}
                        </Typography>
                        <Typography>
                            8585
                        </Typography>
                    </div>
                    <div
                        //@ts-expect-error latency will be a number
                        style={{ display: 'flex', backgroundColor: latencyColor(latency), justifyContent: "center", padding: '5px' }}
                    >
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                            Latency: {latency} ms
                        </Typography>
                    </div>

                </CardContent>
            </Card>
        </Box >
    );
}