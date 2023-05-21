import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import CreatableSelect from "react-select/creatable"
// import Select from 'react-select';
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
// import Select from 'react-select';

const Sub_Category = [
    { value: "Castle Mold", label: "Castle Mold" },
    { value: "Animal Mold Set", label: "Animal Mold Set" },
    { value: "Vehicle Mold", label: "Vehicle Mold" },
    { value: "Dinosaur Mold Set", label: "Dinosaur Mold Set" },
    { value: "Hape Beach Basics", label: "Hape Beach Basics" },
    { value: "Hape Monster Digger", label: "Hape Monster Digger" },
    { value: "Hape Beach Toy Hand Digger", label: "Hape Beach Toy Hand Digger" },
    { value: "Hape Rain Shovel", label: "Great Castle Walls" },
    { value: "Toy Essential Set", label: "Toy Essential Set" },
];

const AddToy = () => {
    const { user } = useContext(AuthContext);
    const [selectedSub_Category, setSelectedSub_Category] = useState(null);
    // const [selectedToyName, setSelectedToyName] = useState(null);
    const { register,watch, handleSubmit } = useForm();

console.log(watch('price'))
    const onSubmit = (data) => {
        // data.toyName = selectedToyName
        data.subToy =selectedSub_Category
        data.sellerEmail = user.email
        data.sellerName = user.displayName
        data.price = parseInt(watch('price'))


        fetch('https://spk-server-side.vercel.app/addToy', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success(`${user?.displayName} Your Toy Add Successful`, {
                        position: 'top-center',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                }
                console.log(data)
            })

    }
    return (

        <div className="py-10  mx-auto bg-base-200 ">
            <Helmet>
                <title>Sand Pal !!  AddToy</title>
            </Helmet>
            <div className="card w-full max-w-7xl mx-auto shadow-2xl bg-base-100">
                <h1 className="text-center text-4xl font-extrabold p-5 shadow-2xl bg-base-100 rounded-t-xl ">Add Your Toy</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-body">
                        <div className="md:flex gap-2">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-extrabold text-lg">Seller Name</span>
                                </label>
                                <input defaultValue={user?.displayName} type="text" placeholder="" className="input input-bordered" readOnly />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-extrabold text-lg">Email</span>
                                </label>
                                <input defaultValue={user?.email} type="email" placeholder="" className="input input-bordered" readOnly />
                            </div>
                        </div>

                        <div className="md:flex gap-2">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-extrabold text-lg"> Photo URL Of Toy</span>
                                </label>
                                <input  {...register("photoURL")} type="text" placeholder=" Add Toy Url" className="input input-bordered" required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-extrabold text-lg">Toy Name</span>
                                </label>
                                <select {...register("toyName")} className="input input-bordered" >
                                    <option value="Sand Molds">Sand Molds</option>
                                    <option value="Sand Shapers">Sand Shapers</option>
                                    <option value="Sand Tools">Sand Tools</option>
                                    <option value="Sand Buckets">Sand Buckets</option>
                                    <option value="Sand Sculpting Kits">Sand Sculpting Kits</option>
                                </select>
                            </div>
                        </div>
                        <div className="md:flex gap-2">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-extrabold text-lg">Available quantity</span>
                                </label>
                                <input  {...register("quantity")} type="number" placeholder="Add Available Quantity Note: ONLY NUMBER ADD" className="input input-bordered" required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-extrabold text-lg">Toy sub Category</span>
                                </label>
                                <CreatableSelect
                                    defaultValue={selectedSub_Category}
                                    onChange={setSelectedSub_Category}
                                    options={Sub_Category}
                                    isMulti
                                />

                            </div>
                        </div>

                        <div className="md:flex gap-2">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-extrabold text-lg">Price</span>
                                </label>
                                <input {...register("price")} className="input input-bordered" placeholder="Enter Price " required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-extrabold text-lg">Rating</span>
                                </label>
                                <input {...register("rating")} className="input input-bordered" placeholder="Enter Rating" required />
                            </div>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-extrabold text-lg">Toy Description</span>
                            </label>
                            <textarea {...register("description")} className="input input-bordered h-48" placeholder="Write Description" required />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value='submit' className="text-xl font-extrabold btn btn-primary btn-outline" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToy;