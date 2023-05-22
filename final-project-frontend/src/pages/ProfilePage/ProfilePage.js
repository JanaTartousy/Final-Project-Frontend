import React from 'react';
import "./ProfilePage.css"
import profileImage from "../../images/user.webp"

function ProfilePage() {
  return (
    <div className='profile-wrap-container'>
        <h2 className="profile-title">Profile</h2>
                    <section className="profile-whole">
                        <img
                            src={profileImage}
                            alt="User Profile"
                            className="profile-image"
                        />
                        <section className="profile-informations">
                            <p className="profile-info">Username: </p>
                           
                                <p className="profile-info">Email: </p>
                            
                            
                        </section>
                    </section>
    </div>
  )
}

export default ProfilePage