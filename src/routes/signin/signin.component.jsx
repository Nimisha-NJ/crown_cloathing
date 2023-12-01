import { signInWithGooglePopup } from "../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    let response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <h2>SignIn</h2>
      <button onClick={logGoogleUser}>sign in with google</button>
    </div>
  );
};

export default SignIn;
