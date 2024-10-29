document.getElementById('loadVideo').addEventListener('click', function() {
    var url = "http://api.yujn.cn/api/zzxjj.php?type=video";
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('网络响应失败');
            }
            return response.text(); // 假设返回的是视频 URL
        })
        .then(videoUrl => {
            var videoSource = document.getElementById('videoSource');
            videoSource.src = videoUrl;
            var video = document.getElementById('video');
            video.load(); // 重新加载视频
        })
        .catch(error => {
            console.error('获取视频出错:', error);
        });
});
