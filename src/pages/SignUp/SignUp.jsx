import Lottie from "lottie-react";
import signUpLottie from '../../../public/assets/sign-up.json'
import { FaGoogle } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SignUp = () => {

    const axiosPublic = useAxiosPublic();

    const {  setUser, handleGoogleSignUp } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleGoogleSignOnClick = () => {
        handleGoogleSignUp()
            .then((result) => {
                const user = result.user;
                setUser(user);
                const userInfo = {
                    userName: user.displayName,
                    userEmail: user.email,
                    userRole: "user",
                }
                axiosPublic.post('/user', userInfo)
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Successfully Sign in With Your Google",
                    showConfirmButton: false,
                    timer: 1500
                });
                setTimeout(() => navigate('/'), 1500);
            })
            .catch((error) => {
                Swal.fire({
                    position: "top",
                    icon: "error",
                    title: error.message,
                });
            });
    };

    return (
        <div className="h-screen w-11/12 mx-auto flex flex-col justify-center">
            <div className="hero-content flex flex-col md:flex-row w-full max-h-screen">
                <div className="w-1/2">
                    <Lottie animationData={signUpLottie}></Lottie>
                </div>
                <div className="w-full md:w-1/2 max-w-sm">
                    <h2 className="lg:text-5xl text-3xl font-semibold">You must sign in to use this app.</h2>
                    <button onClick={handleGoogleSignOnClick} className="btn btn-neutral w-full lg:mt-8 mt-5"><FaGoogle /> Sign in with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;