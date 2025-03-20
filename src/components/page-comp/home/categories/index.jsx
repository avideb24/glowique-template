import { allCategories } from "@/utils/allCategories";
import Image from "next/image";
import Link from "next/link";


const Categories = () => {

    const categories = allCategories();

    return (
        <div className="bg-slate-100 py-8 md:py-20">
            <div className="container">
                <h2 className="section-heading ">Shop By Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {
                        categories?.map(category =>
                            <Link href={"/"} key={category?.id} className="flex flex-col items-center p-3 md:p-5 border border-slate-400 hover:border-primary duration-200">
                                <Image src={category?.icon} className="w-10 lg:w-24" width={100} height={100} alt={category?.title || "category title"} />
                                <h3 className="mt-4 text-base lg:text-xl">{category?.title}</h3>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;