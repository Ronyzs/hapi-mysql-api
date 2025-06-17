function logging(request, h) {
    const now = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Makassar',
        hour12: false // gunakan 24 jam
    });
    console.log(`[${now}] ${request.method.toUpperCase()} ${request.path}`);
    return h.continue;
}

module.exports = logging;