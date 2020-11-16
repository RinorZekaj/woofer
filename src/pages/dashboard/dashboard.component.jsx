import React, { useState, useEffect } from "react";

import NavBar from "../../components/nav-bar/nav-bar.component";
import WoofsOverview from "../../components/woofs-overview/woofs-overview.component";
import { auth, firestore } from "../../firebase/firebase.utils";
import Dog from '../../assets/doggo.png'
import Paw from '../../assets/pawprint.svg'

import "./dashboard.styles.scss";

function DashboardPage(props) {
  const [currentUser, setCurrentUser] = useState(null);
  const [woofs, setWoofs] = useState([]);
  const [woof, setWoof] = useState("");
  const [error, setError] = useState(null);

  let unsubcribeFromAuth = null;

  useEffect(() => {
    unsubcribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const { email, uid } = user;
        setCurrentUser({
          email,
          uid,
        });

        firestore.collection("woofs").onSnapshot(async (res) => {
          const allWoofs = res.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          console.log(allWoofs);
          setWoofs(allWoofs);
        });
      } else {
        props.history.push("/login");
      }
    });
    return () => {
      unsubcribeFromAuth();
    };
  }, []);

  const handleSignOut = () => {
    auth.signOut();
  };

  const handleSubmit = () => {
    console.log(woof);

    firestore
      .collection("woofs")
      .doc()
      .set({
        text: woof,
        numberOfLikes: 0,
        user: currentUser.email,
      })
      .then((res) => {
        setWoof("");
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <div className="dashboard-container">
      <NavBar user={currentUser} />
      <div className="dashboard-layout">
        <div className='dog-holder'>
          <img src={Dog} alt='doggo' />
        </div>
        <div className="woofs-holder">
          <WoofsOverview woofs={woofs} currentUser={currentUser} />
        </div>
        <div className="form-holder">
          <input
            type="text"
            placeholder="Type your woof"
            value={woof}
            onChange={(e) => setWoof(e.target.value)}
          />
          <button onClick={handleSubmit}>Woof</button>
          <img src={Paw} alt='paw' /> 
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
