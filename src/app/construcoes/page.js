export default function Construcoes() {
    const construcoes = ['Full Carbon', 'Carbon/Wood', 'Madeira']

    return (
        <>
            <section className="p-4 md:p-10">
                <nav className="w-full max-w-7xl m-auto">
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
                        {construcoes.map((construcao, index) =>
                            <li key={index} className="w-full h-36 flex justify-center items-center">
                                <a href="/prancha" className="w-full h-full flex justify-center items-center font-semibold text-3xl bg-[url('/pranchas.png')] bg-center rounded-xl transform transition duration-300 ease-in-out hover:scale-110">{construcao}</a>
                            </li>
                        )} 
                    </ul>
                </nav>
            </section>
        </>
    )
}