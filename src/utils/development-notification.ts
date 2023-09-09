import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

export const notification = Toastify({
    text: 'Aún en desarollo 🔨',
    duration: 2000,
    position: 'right',
    gravity: 'bottom',
    style: {
      font: 'bold',
      background: 'transparent',
      border: '1px solid #7770ff',
      color: '#7770ff'
    }
  }
)
