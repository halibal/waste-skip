import {
    LuCalendar,
    LuCreditCard,
    LuMapPin,
    LuShield,
    LuTrash2,
    LuTruck,
} from 'react-icons/lu';

export const skipHiringSteps = [
    {
        name: 'Postcode',
        icon: <LuMapPin className="h-4 w-4" />,
        id: 'postcode',
    },
    {
        name: 'Waste Type',
        icon: <LuTrash2 className="h-4 w-4" />,
        id: 'waste-type',
    },
    {
        name: 'Select Skip',
        icon: <LuTruck className="h-4 w-4" />,
        id: 'select-skip',
    },
    {
        name: 'Permit Check',
        icon: <LuShield className="h-4 w-4" />,
        id: 'permit',
    },
    {
        name: 'Choose Date',
        icon: <LuCalendar className="h-4 w-4" />,
        id: 'choose-date',
    },
    {
        name: 'Payment',
        icon: <LuCreditCard className="h-4 w-4" />,
        id: 'payment',
    },
];
