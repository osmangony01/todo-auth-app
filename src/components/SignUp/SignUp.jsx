
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";





const SignUp = () => {

    const [passError, setPassError] = useState("");
    const { createUser, setLoading, updateUserData } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo_url = form.photo_url.value;

        setPassError("");
        if (password.length < 6) {
            setPassError("At least 6 characters needed!!");
            return;
        }

        createUser(email, password)
            .then(result => {
                const CreateUser = result.user;
                //console.log(CreateUser);

                updateUserData(result.user, name, photo_url)
                    .then(() => {
                        //console.log('user name updated ...');
                        const savedUser = { name: name, email: email, role: 'user', photo: photo_url };
                        fetch(`https://todo-server-blue.vercel.app/users`, {
                            method: "POST",
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'Registration is successful',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate("/profile", { replace: true });
                                }
                            })
                    })
                    .catch(error => {
                        console.log(error.message);
                    })

                setLoading(false);
                form.reset();
                navigate("/profile", { replace: true });
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    //console.log(watch("example"));

    return (
        <div className='pt-6'>
            <div className='w-2/5 max-sm:w-11/12 max-md:w-3/4 max-lg:w-1/2 bg-white mx-auto py-8 px-12 max-sm:px-4 shadow rounded'>
                <h3 className='text-center text-3xl font-semibold'>Sign Up</h3>
                <hr className='my-6' />
                <form action="" className='px-4' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="" className='block  mb-1.5'>Full Name</label>
                        <input type="text" name="name" className='input-control hover:border-blue-400 focus:border-blue-400' placeholder='Enter your name' required/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="" className='block mb-1.5'>Email</label>
                        <input type="email" name="email" className='input-control hover:border-blue-400 focus:border-blue-400' placeholder='Enter your email' required/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="" className='block  mb-1.5'>Password</label>
                        <input type="password" name="password" className='input-control hover:border-blue-400 focus:border-blue-400' placeholder='Enter your password' required/>
                        <small>{passError}</small>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="" className='block  mb-1.5' >Photo URL</label>
                        <input type="text" name="photo_url" className='input-control hover:border-blue-400 focus:border-blue-400' placeholder='Enter photo url' />
                    </div>
                    <button className='w-full py-2 mt-5 bg-white border border-purple-400 hover:bg-purple-800 text-base text-black hover:text-white rounded' >Sign Up</button>
                    <p className='mt-2 text-sm  text-slate-600 text-end'>Already have an account? <Link to="/" className='text-blue-700 font-semibold'>Sign In</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;