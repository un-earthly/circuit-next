import { useEffect, useRef } from 'react'

export function CircuitAnimation({ className }) {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        window.addEventListener('resize', resizeCanvas)

        class Circuit {
            x
            y
            angle
            length
            color

            constructor(x, y) {
                this.x = x
                this.y = y
                this.angle = Math.random() * Math.PI * 2
                this.length = Math.random() * 100 + 50
                this.color = '#B87333'
            }

            draw() {
                if (!ctx) return
                ctx.strokeStyle = this.color
                ctx.lineWidth = 2
                ctx.beginPath()
                ctx.moveTo(this.x, this.y)
                ctx.lineTo(
                    this.x + Math.cos(this.angle) * this.length,
                    this.y + Math.sin(this.angle) * this.length
                )
                ctx.stroke()
            }
        }

        const circuits = []

        for (let i = 0; i < 50; i++) {
            circuits.push(new Circuit(Math.random() * canvas.width, Math.random() * canvas.height))
        }

        function animate() {
            if (!ctx) return
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            circuits.forEach((circuit) => circuit.draw())
            requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener('resize', resizeCanvas)
        }
    }, [])

    return <canvas ref={canvasRef} className={className} />
}