import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import Button from "./components/Button";
import axios from "axios";
import Navbar from "./components/Navbar";
import { useRouter } from "next/router";
import Hero from "./Hero";
import Companies from "./Companies"
import Footer from "./Footer"
import Achievement from "./Achievement"
import Courses from "./Courses"
import FreelancerCourses from './FreelancerCourses'

const Home = () => {
    const [signInModalVisibility, setShowSignInModal] = useState(false);
    const [signInfreelancerModalVisibility, setShowSignInfreelancerModal] = useState(false);
    const [signUpModalVisibility, setShowSignUpModal] = useState(false);

    const [email, setEmail] = useState("");
    const [emailfree, setEmailFree] = useState("");

    const [password, setPass] = useState("");
    const [passwordfree, setPassFree] = useState("");

    const [error, setError] = useState("");
    const [errorfree, setErrorFree] = useState("");
  const [signInModalVisibility, setShowSignInModal] = useState(false);
  const [signUpModalVisibility, setShowSignUpModal] = useState(false);
  const [admodSignModal, setAdmodSignModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [error, setError] = useState("");

  const [clients, setClients] = useState([]);
  const [freelancers, setFreelancers] = useState([]);

  const urlClients = "http://localhost:3000/clients";
  const urlFreelancers = "http://localhost:3000/freelancer";

  const router = useRouter();

  useEffect(() => {
    const getClients = async () => {
      const { data: res } = await axios.get(urlClients);
      setClients(res);
    };
    getClients();
  }, []);

  useEffect(() => {
    const getFreelancers = async () => {
      const { data: res } = await axios.get(urlFreelancers);
      setFreelancers(res);
    };
    getFreelancers();
  }, []);

    function openSignInModal() {
        setShowSignInModal(true);
    }
    function openSignInfreelancerModal() {
        setShowSignInfreelancerModal(true);
    }
    function openSignUpModal() {
        setShowSignUpModal(true);
    }
  }

  function closeSignInModal() {
    setShowSignInModal(false);
  }
  function closeSignUpModal() {
    setShowSignUpModal(false);
  }

    async function handlesubmit(e) {
        e.preventDefault();
        console.log(email);
        console.log(password);

        if (email != "" && password != "") {
            const res = await axios.get('http://localhost:3000/clients/login', {
                headers: { 'email': email, 'password': password }
            });

            if(res.data != "")
            {
                const path = "/client/";
                const result = path.concat(res.data.id);
                // console.log(result);
                router.push(result);
            }else{
                setError("Invalid Credentials");
            }

        }else{
            setError("Enter Credentials");
        }
      />

    }
    async function handlesubmitfreelancer(e) {
        e.preventDefault();

        console.log(emailfree);
        console.log(passwordfree);

        if (emailfree != "" && passwordfree != "") {
            console.log("entered the if");
            const res = await axios.get('http://localhost:3000/freelancer/login', {
                headers: { 'email': emailfree, 'password': passwordfree }
            });
            console.log(res);

            if(res.data != "")
            {
                const path = "/freelancer/";
                const result = path.concat(res.data.id);
                // console.log(result);
                router.push(result);
            }else{
                setErrorFree("Invalid Credentials");
            }

        }else{
            setErrorFree("Enter Credentials");
        }

      <Hero />
      <Companies />

    return (
        <>
            <Navbar design="flex justify-between items-center py-3 px-5"
                template=
                {
                    <>
                        <h1 className="text-white text-3xl font-bold">Freelance</h1>
                        <div className="flex items-center space-x-5 text-xs">
                            <div className="space-x-5">
                                <Button handleClick={openSignUpModal} text="Sign Up" design="bg-white text-black px-5 py-2 rounded font-bold" />
                                <Button handleClick={openSignInModal} text="Sign In Client" design="text-white border px-5 py-2 rounded font-bold" />
                                <Button handleClick={openSignInfreelancerModal} text="Sign In Freelancer" design="text-white border px-5 py-2 rounded font-bold" />
                            </div>
                        </div>
                    </>
                } />

      <Achievement />
      <Courses />
      <div className="flex justify-center">
        <button
          className="group-hover:block text-transparent hover:text-white hover:bg-green-500 font-bold py-2 px-4 rounded"
          onClick={() => setAdmodSignModal(true)}
        >
          Privilege
        </button>
      </div>

      {signInModalVisibility && (
        <Modal
          closeModal={closeSignInModal}
          content={
            <div className="relative bg-white rounded-lg border-2">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900">
                  Sign in to our platform
                </h3>
              </div>
              <div className="p-4 md:p-5">
                <form className="space-y-4" onSubmit={handlesubmit}>
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="name@company.com"
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Your password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPass(e.target.value)}
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-start"></div>
                  </div>
                  <Button
                    text="Login to your account"
                    design="w-full text-white bg-[#20bc74] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="submit"
                  />
                  <p className="text-center text-red-700 font-bold">{error}</p>
                </form>
              </div>
            </div>
          }
        />
      )}
      {signUpModalVisibility && (
        <Modal
          closeModal={closeSignUpModal}
          content={
            <>
              <div class="border-[#20bc74] border-4 h-[500px] w-[500px] grid grid-cols-2">
                <Link
                  href="/signup/freelancer"
                  className="text-center border-[#20bc74] border-r-2 bg-white flex flex-col justify-center items-center hover:bg-[#20bc74]"
                >
                  <p className="text-black text-3xl font-bold py-3 px-5 text-center">
                    Become Link freelancer
                  </p>
                  <p className="text-black text-xl font-bold py-3 px-5">
                    Our platform has {freelancers.length} freelancers
                  </p>
                </Link>
                <Link
                  href="/signup/client"
                  className="border-black text-center bg-white flex flex-col justify-center items-center hover:bg-[#20bc74]"
                >
                  <p className="text-black text-3xl font-bold py-3 px-5">
                    Become Link client
                  </p>
                  <p className="text-black text-xl font-bold py-3 px-5">
                    Our platform has {clients.length} clients
                  </p>
                </Link>
              </div>
            </>
          }
        />
      )}
      {admodSignModal && (
        <Modal
          closeModal={closeModal}
          content={
            <>
              <div class="border-[#20bc74] border-4 h-[500px] w-[500px] grid grid-cols-2">
                <Link
                  href="/signup/admin"
                  className="text-center border-[#20bc74] border-r-2 bg-white flex flex-col justify-center items-center hover:bg-[#20bc74]"
                >
                  <p className="text-black text-3xl font-bold py-3 px-5 text-center">
                    Sign in as Admin
                  </p>
                  <p className="text-black text-xl font-bold py-3 px-5">
                    Admin access to the platform
                  </p>
                </Link>
                <Link
                  href="/moderator/Login"
                  className="border-black text-center bg-white flex flex-col justify-center items-center hover:bg-[#20bc74]"
                >
                  <p className="text-black text-3xl font-bold py-3 px-5">
                    Sign in as Moderator
                  </p>
                  <p className="text-black text-xl font-bold py-3 px-5">
                    Moderator access to the platform
                  </p>
                </Link>
              </div>
            </>
          }
        />
      )}

      <Achievement />
      <Courses />
      <Footer />
    </>
  );
};

export default Home;
