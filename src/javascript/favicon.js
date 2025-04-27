(function() {
    function setFavicon(src, radius = 8) { // Default radius == 8px
        const favicon = document.getElementById('favicon');
        const image = new Image();
        image.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const size = 32;
            canvas.width = size;
            canvas.height = size;
            
            ctx.beginPath();
            ctx.arc(radius, radius, radius, Math.PI, 1.5 * Math.PI); // Top-left corner
            ctx.lineTo(size - radius, 0);
            ctx.arc(size - radius, radius, radius, 1.5 * Math.PI, 0); // Top-right corner
            ctx.lineTo(size, size - radius);
            ctx.arc(size - radius, size - radius, radius, 0, 0.5 * Math.PI); // Bottom-right corner
            ctx.lineTo(radius, size);
            ctx.arc(radius, size - radius, radius, 0.5 * Math.PI, Math.PI); // Bottom-left corner
            ctx.lineTo(0, radius);
            ctx.closePath();
            ctx.clip();
            
            ctx.drawImage(image, 0, 0, size, size);
            
            favicon.href = canvas.toDataURL('image/png');
        };
        image.onerror = () => {
            const fallbackUrl = 'https://avatars.githubusercontent.com/u/207246128';
            setFavicon(fallbackUrl, radius);
        };
        image.src = src;
    }
    let favicon = document.getElementById('favicon');
    if (!favicon) {
        favicon = document.createElement('link');
        favicon.id = 'favicon';
        favicon.rel = 'icon';
        favicon.type = 'image/png';
        document.head.appendChild(favicon);
    }
    
    const faviconUrl = 'https://a.furaffinity.net/bexxi.gif';
    setFavicon(faviconUrl, 8);
})();