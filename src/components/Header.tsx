// import {useTranslation} from "react-i18next";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useTranslation } from "react-i18next";
import UserMenu from "@/components/UserMenu.tsx";

export const Header = () => {
    const { t } = useTranslation();
    const { login, register } = useKindeAuth();
    const { user } = useKindeAuth();
    const handleLogin = () => {
        login();
    };
    const handleRegister = () => {
        register();
    };
    return (
        <header className="container flex justify-between items-center mx-auto">
            <a href="/" className="logo text-primary text-2xl">react-boilerplate.</a>
            <div className="actions">
                {user ? (
                    <UserMenu />
                ) : (
                    <div>
                        <button className="btn btn-ghost sign-in-btn" onClick={handleLogin}>
                            {t('login')}
                        </button>
                        <button className="btn btn-dark" onClick={handleRegister}>
                            {t('register')}
                        </button>
                    </div>
                )}

            </div>
        </header>
    )
}


export default Header;