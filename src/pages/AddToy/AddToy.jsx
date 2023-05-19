import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import CreatableSelect from "react-select/creatable"
import Select from 'react-select';
// import Select from 'react-select';

const Sub_Category = [
    { value: 'Castle Mold', label: 'Castle Mold' },
    { value: 'Animal Mold Set', label: 'Animal Mold Set' },
    { value: 'Vehicle Mold', label: 'Vehicle Mold' },
    { value: 'Dinosaur Mold Set', label: 'Dinosaur Mold Set' },
    { value: 'Hape Beach Basics', label: 'Hape Beach Basics' },
    { value: 'Hape Monster Digger', label: 'Hape Monster Digger' },
    { value: 'Hape Beach Toy Hand Digger', label: 'Hape Beach Toy Hand Digger' },
    { value: 'Hape Rain Shovel', label: 'Great Castle Walls' },
    { value: 'Toy Essential Set', label: 'Toy Essential Set' },
];
const Toy_Name = [
    { value: 'Sand Molds', label: 'Sand Molds' },
    { value: 'Sand Shapers', label: 'Sand Shapers' },
    { value: 'Sand Tools', label: 'Sand Tools' },
    { value: 'Sand Buckets', label: 'Sand Buckets' },
    { value: 'Sand Sculpting Kits', label: 'Sand Sculpting Kits' },
];

const AddToy = () => {
    const { user } = useContext(AuthContext);
    const [selectedOption, setSelectedOption] = useState(null);
    const { register, handleSubmit, watch } = useForm();
    console.log(watch("photoURL"));

    const onSubmit = (data) => {
        console.log(data)
        data.sub_toy = selectedOption
        data.seller_email = user.email
        data.Seller_name = user.displayName


        fetch('http://localhost:5000/addToy',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(data =>console.log(data))

    }
    return (

        <div className="py-10  mx-auto bg-base-200 ">
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
                                    <Select

                                        defaultValue={selectedOption}
                                        onChange={setSelectedOption}
                                        options={Toy_Name}
                                        required
                                    />
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
                                        defaultValue={selectedOption}
                                        onChange={setSelectedOption}
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
                                    <input {...register("Rating")} className="input input-bordered" placeholder="Enter Rating" required />
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