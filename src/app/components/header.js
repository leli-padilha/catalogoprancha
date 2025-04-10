import Image from "next/image"

export default function Header() {
    return (
        <>
            <header className="h-24 w-full bg-black flex items-center">
                <div className="w-full max-w-7xl m-auto flex items-center justify-between px-4">
                    <a href="/">
                        <Image src={'/magic.png'} alt="Logo Magic Surf" width={150} height={0}/>
                    </a>
                    <Image src={'/menu.png'} alt="Logo Magic Surf" width={40} height={40}/>
                </div>
            </header>
            <section className="bg-gray-950 h-10">
                <div className="w-full max-w-7xl h-full m-auto flex justify-center items-center">
                    <h1 className="text-white">CATÁLOGO DE PRANCHAS MAGIC SURF</h1>
                </div>
            </section>
        </>
    )
}