import { useRouter } from "next/router";
import Navbar from "../Navbar";
import Button from "../Button";
import { useEffect, useState } from "react";
import axios from "axios";

const client = () => {

    const [Name, setName] = useState([]);

    const router = useRouter();
    const id = router.query.clientid;
    // console.log(id === undefined);
    const url = "http://localhost:3000/clients/";
    const path = url.concat(id);
    // console.log(path);
    // console.log(path === null);

    if (id != undefined && path != undefined) {
        useEffect(() => {
            const result = async () => {
                const res = await axios.get(path, {
                    params: {
                        id: id
                    },
                });
                console.log(res.data);
                setName(res.data);
                console.log(Name);
            }
            result();
        }, []);
    }


    return (
        <div>
            <Navbar design="flex justify-between items-center py-3 px-5"
                template=
                {
                    <>
                        <h1 className="text-white text-3xl font-bold">Freelance</h1>
                        <div className="flex items-center space-x-5 text-xs">
                            <div className="space-x-5">
                                <Button text="Settings" design="border-black border-2 text-black px-5 py-2 rounded font-bold" />
                                <Button text="Log Out" design="bg-white text-black border px-5 py-2 rounded font-bold" />
                            </div>
                        </div>
                    </>
                } />
            <div className='w-full bg-white py-24'>
                <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>

                    <div className='flex flex-col justify-center gap-4'>
                        <h1 className='md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold'> Welcome <span className='text-[#20B486]'>{  }</span>
                        </h1>
                    </div>

                    <img src={"/heroImg.png"} className="md:order-last  order-first" />



                </div>


            </div>

        </div>
    );
}

export default client;