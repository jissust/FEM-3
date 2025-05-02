import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import dataJson from "../data/data.json";

type ExtensionItem = {
  name: string;
  isActive: boolean;
  logo: string;
  description: string;
};

type ExtensionsContextType = {
  data: ExtensionItem[];
  dataFilter: ExtensionItem[];
  active: string;
  setActive: (value: string) => void;
  removeItem: (name: string) => void;
  changeState: (name: string) => void;
  resetFilter: () => void;
  filterDataIsActive: () => void;
  filterDataInactive: () => void;
  restoreList: () => void;
};

const LOCAL_STORAGE_KEY = "extensionsData";

const ExtensionsContext = createContext<ExtensionsContextType | undefined>(
  undefined
);

export const useExtensions = () => {
  const context = useContext(ExtensionsContext);
  if (!context)
    throw new Error("useExtensions debe usarse dentro de ExtensionsProvider");
  return context;
};

export const ExtensionsProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<ExtensionItem[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? JSON.parse(saved) : dataJson;
  });

  const [dataFilter, setDataFilter] = useState(data);
  const [active, setActive] = useState("all");

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const filterDataIsActive = () => {
    const activeItems = data.filter((item: ExtensionItem) => item.isActive);
    setDataFilter(activeItems);
    setActive("active");
  };

  const filterDataInactive = () => {
    const activeItems = data.filter((item: ExtensionItem) => !item.isActive);
    setDataFilter(activeItems);
    setActive("inactive");
  };

  const resetFilter = () => {
    setData(data);
    setDataFilter(data);
    setActive("all");
  };

  const removeItem = (index: string) => {
    const updatedItems = data.filter(
      (item: ExtensionItem) => item.name != index
    );
    setData(updatedItems);
    setDataFilter(updatedItems);
  };

  const changeState = (index: string) => {
    const updatedItems = data.map((item: ExtensionItem) =>
      item.name === index ? { ...item, isActive: !item.isActive } : item
    );
    setData(updatedItems);
    setDataFilter(updatedItems);
  };

  const restoreList = () => {
    setData(dataJson);
    setDataFilter(dataJson);
    setActive("all");
  };

  return (
    <ExtensionsContext.Provider
      value={{
        data,
        dataFilter,
        active,
        setActive,
        removeItem,
        changeState,
        resetFilter,
        filterDataIsActive,
        filterDataInactive,
        restoreList,
      }}
    >
      {children}
    </ExtensionsContext.Provider>
  );
};
