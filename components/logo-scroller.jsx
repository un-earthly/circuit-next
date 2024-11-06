import Image from 'next/image'

const logos = [
    'https://ph-files.imgix.net/51230fb9-1173-4867-8186-20a71c547bca.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop&dpr=1',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAY1BMVEXv7ubx8Oj39u708+v49+/DwrxubWpdXFm7urSGhYEAAAB9fXkVFRReXlsMDAxiYl4eHh3Ix8H8+/Pw7+empqBUU1FqaWaOjYgEBAXg39jBwLp1dHDT08yjop3OzccaGhqTko3CXVV5AAAAxUlEQVR4AcXRRQLCQBAAwcxMtCHunv9/Ene409daX+ePib5k7+Z6fvDID903i3hr96LiwT4mIU7PZZDLA9VnL4UHXqGqriXs9IkBqVsaVFaeKmqad9RSzigilkNrX5hwraOXn9glCQzmfCFjVdER6cm+sXJ1Ajz9hbM6dtKfyyYsdtGfB+pu+usREi5aNAQv6LNKkUMELIWTMD7RQqCmQz0g7mCRry/zTHPOte8fukTj1ttpkT4K/OHVTompiXOqNFVz/tcRsSQOHX/1g5EAAAAASUVORK5CYII=',
    'https://ph-files.imgix.net/58eb6207-e885-43c3-9642-8bd5dae0f7a9.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop&dpr=1',
    'https://ph-files.imgix.net/97cdb10f-d10a-4ec9-9616-269b31f6dafb.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop&dpr=1',
    'https://ph-files.imgix.net/8832ce79-55d0-40bf-9f33-6da56f8062e8.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop&dpr=1',
    'https://ph-files.imgix.net/ec8a0a4a-3730-4deb-9db2-ce99a2c7dbc1.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=max&dpr=1',
    'https://ph-files.imgix.net/b71ff167-1b48-4cba-9935-9dba59bf1deb.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop&dpr=1',
    'https://ph-files.imgix.net/2798621e-1e46-40e9-887f-a8afc3b6aa1b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop&dpr=1',
]

export function LogoScroller() {
    return (
        <div className="overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-marquee">
                {logos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo}
                        alt={`Company logo ${index + 1}`}
                        width={100}
                        height={50}
                        className="inline-block mx-8"
                    />
                ))}
            </div>
            <div className="inline-block animate-marquee">
                {logos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo}
                        alt={`Company logo ${index + 1}`}
                        width={100}
                        height={50}
                        className="inline-block mx-8"
                    />
                ))}
            </div>
        </div>
    )
}