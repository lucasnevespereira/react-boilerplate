import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";


const UserMenu = () => {
    const {t} = useTranslation();
    const {user, logout} = useKindeAuth();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    const handleLogout = () => {
        logout();
    };

    const fullName = `${user?.given_name} ${user?.family_name}`;
    const picture = user?.picture ? user.picture : `https://ui-avatars.com/api/?name=${fullName}`;

    return (
        <div className="dropdown dropdown-end">
            <div
                tabIndex={0}
                className="avatar mt-3 cursor-pointer"
                onClick={toggleDropdown}
            >
                <div className="w-10 rounded-full">
                    <img src={picture} alt="user picture"/>
                </div>
            </div>

            {dropdownOpen && (
                <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                    <li>
                        <a href="/profile" className="block text-sm">
                            {t("profile")}
                        </a>
                    </li>
                    <li>
                        <a href="/settings" className="block text-sm">
                            {t("settings")}
                        </a>
                    </li>
                    <li>
                        <button
                            onClick={handleLogout}
                            className="block w-full text-left text-sm"
                        >
                            {t("logout")}
                        </button>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default UserMenu;
