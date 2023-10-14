import "./App.css";
import ImageUploader from "./ImageUploader";
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      {user ? (
        <>
          <UserInfo />
          <SignOutButton />
          {/* uplodaer */}
          <ImageUploader />
        </>
        ) : (
          <SignInButton />
        )
      }

    </div>
  );
}

export default App;

//グーグルボタンでサインイン
function SignInButton() {
  const SignInWithGoogle = () => {
      //firebaseを使ってグーグルでサインインする
      signInWithPopup(auth, provider);
  }

  return (
      <button onClick={SignInWithGoogle}>
         <p>グーグルでサインイン</p>
      </button>
  )
};

//サインアウト
function SignOutButton() {
  return (
      <button onClick={() => auth.signOut()}>
         <p>サインアウト</p>
      </button>
  );
};

function UserInfo() {
  return (
      <div>
        <img src={auth.currentUser.photoURL} alt=""/>
        <p>{auth.currentUser.displayName}</p>
      </div>
  );
};
