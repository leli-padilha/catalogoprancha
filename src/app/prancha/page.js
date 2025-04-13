import Image from "next/image"

export default function Prancha() {
    return (
        <section className="p-4 lg:p-10 bg-[url('/ondas.png')] bg-center bg-no-repeat bg-cover">
            <div className="w-full max-w-7xl m-auto bg-white rounded-[8px] p-4 flex flex-col md:flex-row md:gap-10 md:justify-center">
                <div className="flex md:hidden flex-col items-center">
                    <span className="font-semibold text-gray-500">GUGA ARRUDA</span>
                    <h1 className="text-xl font-bold">MINI LONG FULL CARBON</h1>
                    <span className="text-sm font-medium">Dimensções: 6`5" x 20 7/8" x 3 3/16" x 48L</span>
                </div>
                <div className="md:w-1/2">
                    <Image src={'/minilong.webp'} alt="Mini Long Full Carbon" width={300} height={0} className="lg:w-full"/>
                </div>
                <div className="hidden md:flex md:flex-col md:w-1/2">
                    <span className="font-semibold text-gray-500">GUGA ARRUDA</span>
                    <h1 className="text-xl font-bold">MINI LONG FULL CARBON</h1>
                    <span className="text-sm font-medium"><b>Dimensções:</b> 6`5" x 20 7/8" x 3 3/16" x 48L</span>
                    <div className="w-full flex flex-col gap-4">
                        <span><b>Copinhos:</b> FCSII (5 QUILHAS)</span>
                        <p className="text-start">
                            <b>Objetivo da prancha: </b> 
                            Esse mini long, com frente larga e rabeta performance, brinca de ser long! 
                            Com remada fenomenal, corta as ondas e permite pé no bico, além de manobrar 
                            de borda e dar batida como uma Evolution. É simplesmente viciante e apaixonante 
                            nos mares de verão
                        </p>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-4 md:hidden">
                    <span><b>Copinhos:</b> FCSII (5 QUILHAS)</span>
                    <p className="text-start">
                        <b>Objetivo da prancha: </b> 
                        Esse mini long, com frente larga e rabeta performance, brinca de ser long! 
                        Com remada fenomenal, corta as ondas e permite pé no bico, além de manobrar 
                        de borda e dar batida como uma Evolution. É simplesmente viciante e apaixonante 
                        nos mares de verão.
                    </p>
                </div>
                
            </div>
        </section>
    )
}