const express = require('express');
const app = express();
const port = 3000;

// 这里是视频列表（可以替换为实际视频的 URL）
const videos = [
    "https://example.com/video1.mp4",
    "https://example.com/video2.mp4",
    "https://example.com/video3.mp4"
];

app.get('/api/zzxjj', (req, res) => {
    const type = req.query.type;
    if (type === 'video') {
        // 随机选择一个视频
        const randomVideo = videos[Math.floor(Math.random() * videos.length)];
        res.send(randomVideo);
    } else {
        res.status(400).send('无效的请求');
    }
});

app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});
