import ChangePassword from "@/components/dashboard-pages/dashboard-setttings/ChangePassword";
import DefaultSettings from "@/components/dashboard-pages/dashboard-setttings/DefaultSettings";
import EditProfile from "@/components/dashboard-pages/dashboard-setttings/EditProfile";
import { useTheme } from "@/components/ThemeProvider/ThemeProvider";
import { useState } from "react";

const Settings = () => {
  const { theme, handleThemeChange } = useTheme();
  const [changePassword, setChangePassword] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  
  return (
    <div>
      {changePassword ? (
        <ChangePassword setChangePassword={setChangePassword} />
      ) : editProfile ? (
        <EditProfile setEditProfile={setEditProfile} />
      ) : (
        <DefaultSettings
          theme={theme}
          handleThemeChange={handleThemeChange}
          setChangePassword={setChangePassword}
          setEditProfile={setEditProfile}
        />
      )}
    </div>
  );
};

export default Settings;
