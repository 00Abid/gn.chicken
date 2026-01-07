
export default function manifest() {
    return {
        name: 'Garib Nawaz Fresh Halal Chicken',
        short_name: 'Garib Nawaz Chicken',
        description: 'Vasai Phata\'s trusted source for 100% fresh, Zabihah Halal chicken.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#10b981',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
