import DashboardHeader from "../../common/DashboardHeader";

const GenerateLetter = () => {
  return (
    <div>
      <DashboardHeader title="Appeal" />
      <div className="mt-5 border border-default-border p-4 md:p-5 3xl:p-7 4xl:p-10 rounded-lg bg-white dark:bg-black dark:border-border-gray max-w-[1550px] mx-auto">
        <p className="text-sm md:text-base dark:text-gray-200">
          Subject: Appeal Against Penalty Charge Notice
          <br />
          Dear Sir/Madam,
          <br />
          <br />
          I am writing to formally appeal the Penalty Charge Notice issued
          against my vehicle on 12 April 2025 in High Street Car Park, London.
          My name is Jonathon, and I had parked my vehicle in good faith and
          purchased a valid pay-and-display ticket. Unfortunately, the ticket
          had slipped from the dashboard and was not clearly visible through the
          windscreen at the time the notice was issued. I understand the
          importance of clearly displaying a ticket, but I would like to
          respectfully point out that the ticket was paid for in full and
          covered the period in question. I have attached a photo of the valid
          ticket showing the correct date and time. This was an honest mistake,
          and I kindly ask that you take this into consideration when reviewing
          the appeal. I hope that, given the circumstances and the proof of
          payment, the notice can be cancelled as a gesture of fairness. Thank
          you for your time and understanding. I look forward to your response.
          <br />
          <br />
          Yours sincerely,
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-end gap-3 4xl:gap-5 items-center mt-10">
        <button className="font-medium md:text-lg px-4 py-2 4xl:py-3  border border-sidebar-card-headingOne bg-transparent rounded-lg text-sidebar-card-headingOne cursor-pointer transition-all duration-500 hover:bg-sidebar-card-headingOne hover:text-white">
          Submit this appeal through website
        </button>
        <button className="font-medium md:text-lg px-4 py-2 4xl:py-3 bg-sidebar-card-headingOne border border-sidebar-card-headingOne rounded-lg text-white cursor-pointer transition-all duration-500 hover:bg-transparent hover:text-sidebar-card-headingOne">
          Submit this appeal with parkclear
        </button>
      </div>
    </div>
  );
};

export default GenerateLetter;
