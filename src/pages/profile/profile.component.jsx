import React, { useEffect, useState } from "react";

import NavBar from "../../components/nav-bar/nav-bar.component";
import WoofsOverview from "../../components/woofs-overview/woofs-overview.component";
import { auth, firestore } from "../../firebase/firebase.utils";
import Dog from "../../assets/doggo.png";
import Face from "../../assets/face.webp";
import "./profile.styles.scss";
import Spinner from "../../components/spinner/spinner.component";

function ProfilePage(props) {
  const [myWoofs, setMyWoofs] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false)

  let unsubcribeFromAuth = null;

  useEffect(() => {
    unsubcribeFromAuth = auth.onAuthStateChanged(async (user) => {
      setLoading(true)
      if (user) {
        const { email, uid } = user;
        setCurrentUser({
          email,
          uid,
        });

        firestore
          .collection("woofs")
          .where("user", "==", user.email)
          .onSnapshot(async (res) => {
            const woofs = res.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            console.log(woofs);
            setMyWoofs(woofs);
            setLoading(false)
          });
      } else {
        props.history.push("/login");
      }
    });
    return () => {
      unsubcribeFromAuth();
    };
  }, []);

  return (
    <div className="profile-page-container">
      <NavBar profile="true" currentUser={currentUser} />
      <div className="profile-layout">
        <div className="dog-holder">
          <img src={Dog} alt="doggo" />
        </div>
        <div className="woofs-holder">
          {loading && <Spinner />}
          <WoofsOverview woofs={myWoofs} currentUser={currentUser} />
        </div>
        <div className="profile-holder">
          <img src={Face} />
          <p>{myWoofs.length} Woofs</p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
