import * as THREE from 'three'
import { Pattern } from '@/store/useCustomizer'
type Hex = `#${string}`

export function makePatternTexture(pattern: Pattern, baseColor: Hex) {
  if (pattern === 'none') return null
  const size = 256
  const canvas = document.createElement('canvas')
  canvas.width = size; canvas.height = size
  const ctx = canvas.getContext('2d')!
  ctx.fillStyle = baseColor
  ctx.fillRect(0,0,size,size)

  ctx.globalAlpha = 0.25
  ctx.fillStyle = '#ffffff'

  switch (pattern) {
    case 'stripes': {
      const stripeW = 24
      for (let x=0; x<size; x+=stripeW*2) ctx.fillRect(x,0,stripeW,size)
      break
    }
    case 'polka': {
      const r = 8
      for (let y=0; y<size; y+=32)
        for (let x=0; x<size; x+=32) {
          ctx.beginPath()
          ctx.arc(x + ((y/32)%2 ? 8:0), y, r, 0, Math.PI*2)
          ctx.fill()
        }
      break
    }
    case 'plaid': {
      for (let y=0; y<size; y+=32) ctx.fillRect(0,y,size,10)
      for (let x=0; x<size; x+=32) ctx.fillRect(x,0,10,size)
      break
    }
  }
  const tex = new THREE.CanvasTexture(canvas)
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(2,2)
  tex.needsUpdate = true
  return tex
}
