import { createContext, useContext, useState, ReactNode } from 'react';

interface PageContextType {
    activePage: number;
    setActivePage: (page: number) => void;
}

const PageContext = createContext<PageContextType | undefined>(undefined);

export const usePage = () => {
    const context = useContext(PageContext);
    if (!context) {
        throw new Error('usePage must be used within a PageProvider');
    }
    return context;
};

export const PageProvider = ({ children }: { children: ReactNode }) => {
    const [activePage, setActivePage] = useState(0);
    return (
        <PageContext.Provider value={{ activePage, setActivePage }}>
            {children}
        </PageContext.Provider>
    );
};

