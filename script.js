// 获取画布元素
const canvas = document.getElementById('histogramCanvas');
const ctx = canvas.getContext('2d');

// 设置画布大小
canvas.width = 400;
canvas.height = 300;

// 数据
const data = [50, 80, 30, 60, 40];

// 计算直方图的宽度和高度
const barWidth = canvas.width / data.length;
const maxValue = Math.max(...data);
const barHeightScale = (canvas.height - 20) / maxValue;

// 绘制直方图
for (let i = 0; i < data.length; i++) {
    const x = i * barWidth;
    const y = canvas.height - data[i] * barHeightScale;
    const barHeight = data[i] * barHeightScale;

    ctx.fillStyle = 'blue';
    ctx.fillRect(x, y, barWidth - 5, barHeight);

    // 添加文字
    ctx.fillStyle = 'black';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(data[i], x + barWidth / 2, y - 5);
}
