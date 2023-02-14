import { useEffect, useState } from 'react';

const currentStores = [
    {
        name: 'Modivo',
        id: crypto.randomUUID(),
        isActive: true,
    },
    {
        name: 'Sizeer',
        id: crypto.randomUUID(),
        isActive: true,
    },
    {
        name: 'Nike',
        id: crypto.randomUUID(),
        isActive: true,
    },
    {
        name: 'Zalando',
        id: crypto.randomUUID(),
        isActive: true,
    },
];

const CurrentSales = () => {
    const [activeStores, setActiveStores] = useState(currentStores);

    const updateActiveStoresHandler = ({ target }: React.MouseEvent) => {
        if (!(target instanceof HTMLElement)) return;
        setActiveStores(stores => {
            const chosenStore = stores.find(({ name }) => name === target.textContent?.trim());
            if (chosenStore) chosenStore.isActive = !chosenStore.isActive;
            return [...stores];
        });
    };

    return (
        <div className="mx-auto mt-4 w-fit text-center">
            <h2 className="mb-2 text-lg text-[#a1a1a1]">Available stores sales</h2>
            <div className="flex gap-4">
                {activeStores.map(store => (
                    <button
                        onClick={updateActiveStoresHandler}
                        key={store.id}
                        className={`border border-accent py-1 px-3 rounded-md hover:bg-accent text-lg transition-colors ${
                            store.isActive
                                ? 'bg-black text-white border-accent hover:bg-neutral-700'
                                : ''
                        }`}
                    >
                        {store.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CurrentSales;