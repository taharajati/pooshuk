const https = require('https')
const fs = require('fs')
const path = require('path')

const images = [
  {
    name: 'laptop.jpg',
    url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800',
  },
  {
    name: 'headphones.jpg',
    url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
  },
  {
    name: 'mouse.jpg',
    url: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800',
  },
  {
    name: 'keyboard.jpg',
    url: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800',
  },
]

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filepath = path.join(__dirname, '../public/images', filename)
    const file = fs.createWriteStream(filepath)

    https.get(url, (response) => {
      response.pipe(file)
      file.on('finish', () => {
        file.close()
        resolve()
      })
    }).on('error', (err) => {
      fs.unlink(filepath, () => reject(err))
    })
  })
}

async function downloadAllImages() {
  try {
    for (const image of images) {
      console.log(`Downloading ${image.name}...`)
      await downloadImage(image.url, image.name)
      console.log(`Downloaded ${image.name}`)
    }
    console.log('All images downloaded successfully!')
  } catch (error) {
    console.error('Error downloading images:', error)
  }
}

downloadAllImages() 