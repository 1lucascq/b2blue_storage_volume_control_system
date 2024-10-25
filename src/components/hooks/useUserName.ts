import { useState, useEffect } from 'react';

const useUserName = () => {
    const [userName, setUserName] = useState<string>('');
    const [isNameModalOpen, setIsNameModalOpen] = useState<boolean>(true);

	useEffect(() => {
        const storedName = localStorage.getItem('userName');

        if (storedName) {
            setUserName(storedName);
            setIsNameModalOpen(false);
        }
    }, []);

    useEffect(() => {
        if (userName) {
            localStorage.setItem('userName', userName);
        }
    }, [userName]);

    return { userName, setUserName, isNameModalOpen, setIsNameModalOpen };
};

export default useUserName;
