import { DashboardOverviewCardOne, DashboardOverviewCardThree, DashboardOverviewCardTwo } from './../../svg-container/SvgContainer';

const overviewCardData = [
    {
        id: 1,
        title: 'Total PCN',
        sub_title: 'Last 6 month',
        amount: '240',
        icon: <DashboardOverviewCardOne />
    },
    {
        id: 2,
        title: 'Unpaid PCN',
        sub_title: 'Last 6 month',
        amount: '240',
        icon: <DashboardOverviewCardTwo />
    },
    {
        id: 3,
        title: 'Appeal on Process',
        sub_title: 'Last 6 month',
        amount: '240',
        icon: <DashboardOverviewCardThree />
    }
]

const OverviewCards = () => {
    return (
        <section className='grid grid-cols-3 gap-5 mt-5'>
            {
                overviewCardData?.map(data => <div key={data?.id} className='px-7 py-5 rounded-xl bg-white border border-[#D6D8DB]'>
                    <h2 className='text-2xl font-semibold mb-1 text-dashboard-common-heading'>{data?.title}</h2>
                    <p className='text-dashboard-common-heading text-sm'>{data?.sub_title}</p>
                    <div className="flex justify-between items-center mt-5">
                        <h3 className='text-dashboard-common-heading text-4xl font-bold'>${data?.amount}</h3>
                        <p className='bg-overview-card-bg w-14 h-14 rounded-full border border-default-border grid place-items-center'>{data?.icon}</p>
                    </div>
                </div>)
            }
        </section>
    );
};

export default OverviewCards;