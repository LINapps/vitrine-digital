type ResizeImageArgs = { file: File; maxWidth: number; maxHeight: number; type: string }
export async function resizeImage({ 
  file, 
  maxWidth = 320, 
  maxHeight = 320, 
  type = "image/png" 
}: ResizeImageArgs): Promise<{ blob: Blob }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => {
      const img = new Image()
      img.onload = () => {
        let width = img.width
        let height = img.height

        const aspectRatio = width / height
        if (width > maxWidth || height > maxHeight) {
          if (aspectRatio > 1) {
            // landscape
            width = maxWidth
            height = Math.round(width / aspectRatio)
          } else {
            // portrait
            // or square
            height = maxHeight
            width = Math.round(height * aspectRatio)
          }
        }

        const canvas = document.createElement('canvas')
        canvas.width = width
        canvas.height = height

        const ctx = canvas.getContext('2d')
        ctx?.drawImage(img, 0, 0, width, height)

        canvas.toBlob((blob) => {
          if (!blob) {
            reject(new Error('Failed to resize image'))
            return
          }
          resolve({
            blob
          })
        }, type)
      }
      img.onerror = reject
      img.src = reader.result as string
    }

    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}