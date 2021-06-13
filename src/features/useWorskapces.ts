import { IWorkspace } from "../entities/IWorkspace";

export const useWorkspaces = (): IWorkspace[] => {
    return staticData
}

export const useWorkspace = (id: number): Promise<IWorkspace|null> => {
    return new Promise((resolve, reject) => {
        const data = staticData;
        
        for(let i = 0; i < data.length; i++) {
            if(data[i].id === id) {
                resolve(data[i]);
            }
        }

        resolve(null);
    });
}

const staticData = [
    {
        id: 1,
        bgimage: "/images/tworkspace.jpg",
        icon: "/icons/entities2.svg",
        title: "Client contract",
        type: "Contract",
        userNumber: 150,
        update: "2 days ago",
        description: "Workspace purpose and a bit of context. This much needed description is here to remind people where they are, if they are new or have poor memory."
    },
    {
        id: 2,
        bgimage: "/images/tworkspace.jpg",
        icon: "/icons/entities2.svg",
        title: "Supplier contract",
        type: "Contract",
        userNumber: 25,
        update: "2 days ago",
        description: "Workspace purpose and a bit of context. This much needed description is here to remind people where they are, if they are new or have poor memory."
    },
    {
        id: 3,
        bgimage: "/images/tworkspace2.jpg",
        icon: "/icons/entities2.svg",
        title: "Corporate",
        type: "Corporate",
        userNumber: 25,
        update: "2 days ago",
        description: "Workspace purpose and a bit of context. This much needed description is here to remind people where they are, if they are new or have poor memory."
    },
    {
        id: 4,
        bgimage: "/images/tworkspace2.jpg",
        icon: "/icons/entities2.svg",
        title: "Group Norms",
        type: "Norms",
        userNumber: 25,
        update: "2 days ago",
        description: "Workspace purpose and a bit of context. This much needed description is here to remind people where they are, if they are new or have poor memory."
    },
    {
        id: 5,
        bgimage: "/images/tworkspace.jpg",
        icon: "/icons/entities2.svg",
        title: "Real estate contracts",
        type: "Contract",
        userNumber: 150,
        update: "2 days ago",
        description: "Workspace purpose and a bit of context. This much needed description is here to remind people where they are, if they are new or have poor memory."
    }
];