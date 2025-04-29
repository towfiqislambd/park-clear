import ChangePassword from "@/components/dashboard-pages/dashboard-setttings/ChangePassword";
import DefaultSettings from "@/components/dashboard-pages/dashboard-setttings/DefaultSettings";
import EditProfile from "@/components/dashboard-pages/dashboard-setttings/EditProfile";
import { useState } from "react";


const Settings = () => {
    const [changePassword, setChangePassword] = useState(false)
    const [editProfile, setEditProfile] = useState(false)

    return (
        <div>
            {
                changePassword ?
                    <ChangePassword />
                    :
                    editProfile ?
                        <EditProfile />
                        :
                        <DefaultSettings setChangePassword={setChangePassword} setEditProfile={setEditProfile} />
            }
        </div>
    );
};

export default Settings;