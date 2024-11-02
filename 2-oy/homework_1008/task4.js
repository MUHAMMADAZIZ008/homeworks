let total = process.memoryUsage().rss - process.memoryUsage().arrayBuffers
console.log(total / (1024 * 1024));