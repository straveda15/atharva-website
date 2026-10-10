
import React from "react";

// MEP Contractors & Architects data
const mepArchitectPartners = [
  {
    items: [
      { name: "Ar. Sanjay Pabari & Associates", city: "Nashik" },
      { name: "Project Concept", tag: "(PMC)", city: "Mumbai" },
      { name: "Ar. Dhanjay Mahale", city: "Nashik" },
      {
        name: "Ar. Rajiv Vishwasrao",
        tag: "Architect & Planner",
        city: "Pune",
      },
      {
        name: "Ar. Parag Deshpande",
        tag: "Architect and Planner",
        city: "Pune",
      },
      { name: "Ar. Kshitij Dhande & Associates", city: "Nashik" },
      { name: "Ar. Nitin Pathak & Associates", tag: "(PMC)", city: "Nashik" },
      { name: "Ar. Yogesh Dhamne and Associates", city: "Nashik" },
      { name: "Ar. Manjunath", city: "Mumbai" },
      { name: "Ar. Shoeb Shaikh and Associates", city: "Nashik" },
      { name: "Ar. Nakul Bhavsar and Associates", city: "Nashik" },
      { name: "Ar. Kabre Chaudhary & Associates", city: "Nashik" },
      { name: "Ar. Vishal Patel and Associates", city: "Mumbai" },
      { name: "Ar. Atul Bora and Associates", city: "Nashik" },
      { name: "Ar. Uday Aahire and Associates", city: "Nashik" },
    ],
  },
];

// Our Esteemed Clients data
const clientsLeft = [
  { name: "Nisham Developers", location: "" },
  { name: "Janaki Group", location: "" },
  { name: "Aarohi Infra", location: "" },
  { name: "Charwak Construction", location: "" },
  { name: "Akshada Buildcon", location: "" },
  { name: "Swagat Developers", location: "" },
  { name: "Balaji Developers", location: "" },
  { name: "Kartik Buildcon", location: "" },
  { name: "Laxmi Builders And Developers", location: "" },
  { name: "Prabhav Construction Mumbai", location: "" },
  { name: "New Stop Venture (Fog City, Igatpuri)", location: "" },
  { name: "Riddhi Siddhi Builders And Developers", location: "" },
];

const clientsRight = [
  { name: "Archit Group Build. & Deve.", location: "Nashik" },
  { name: "Rohan Enterprises", location: "Nashik" },
  { name: "Aakar Buildcon", location: "Nashik" },
  { name: "Grandeur Realtors", location: "Nashik" },
  { name: "Niraj Builders & Developers", location: "Nashik" },
  { name: "Avani Builders & Developers", location: "Nashik" },
  { name: "Nirmitee Constructions", location: "Nashik" },
  { name: "Nilkanta Developers", location: "" },
  { name: "Reliable Constructions", location: "Nashik" },
  { name: "Thakkar Builders", location: "Mumbai" },
  { name: "Pacific Housing Corporation", location: "Nashik" },
  { name: "Rajput Constructions", location: "Nashik" },
];

// Reusable client table
const ClientTable = ({ clients, startIndex }) => (
  <div className="w-full overflow-x-auto">
    <table className="w-full min-w-[320px] table-fixed border-collapse bg-white text-left">
      <thead>
        <tr>
          <th className="w-[65%] border border-[#D9D9D9] px-3 py-3 text-sm font-bold text-[#102A43] sm:text-base">
            Client Name
          </th>
          <th className="w-[35%] border border-[#D9D9D9] px-3 py-3 text-sm font-bold text-[#102A43] sm:text-base">
            Location
          </th>
        </tr>
      </thead>

      <tbody>
        {clients.map((client, index) => (
          <tr key={`${client.name}-${startIndex + index}`}>
            <td className="border border-[#D9D9D9] px-3 py-3 align-top text-[13px] leading-5 text-[#102A43] sm:text-[14px]">
              {client.name}
            </td>

            <td className="border border-[#D9D9D9] px-3 py-3 align-top text-[13px] leading-5 text-[#102A43] sm:text-[14px]">
              {client.location || "—"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ClientsPage = () => {
  const allPartners = mepArchitectPartners.flatMap(
    (group) => group.items
  );

  const columns = [
    allPartners.filter((_, index) => index % 3 === 0),
    allPartners.filter((_, index) => index % 3 === 1),
    allPartners.filter((_, index) => index % 3 === 2),
  ];

  return (
    <main className="w-full bg-[#EDE9EA]">

      {/* COLLABORATIONS & NETWORKS */}
      <section className="w-full bg-[#EDE9EA] py-10 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

          {/* SECTION HEADER */}
          <div className="mb-8 max-w-7xl sm:mb-10">
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.16em] text-[#0098DB] sm:text-[13px]">
              Collaborations & Networks
            </p>

            <h2 className="text-2xl font-bold leading-tight tracking-[-0.03em] text-[#102A43] sm:text-3xl lg:text-[38px]">
              MEP Contractors & Architects
            </h2>

  <p className="w-full text-justify">
    Successful Projects Are Built On Strong Partnerships. We Are Proud To Have
    Collaborated With Some Of The Most Respected Architects, Planners, And
    Builders In The Industry.
  </p>

          </div>

          {/* SINGLE OUTER CARD FOR ALL PARTNERS */}
          <div className="overflow-hidden rounded-2xl border bg-gray-100 p-4 shadow-sm sm:p-6 lg:p-8">

            {/* PARTNER LIST */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

              {/* COLUMN 1 */}
              <div className="py-2 sm:pr-6 lg:pr-8">
                {columns[0].map((partner, index) => (
                  <div
                    key={`column-1-${partner.name}-${index}`}
                    className="flex items-start gap-3.5 py-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-200 text-sm font-bold text-[#2563EB]">
                      {String(index * 3 + 1).padStart(2, "0")}
                    </div>

                    <div className="min-w-0 flex-1 pt-0.5">
                      <h4 className="break-words text-[15px] font-bold leading-6 text-[#102A43] sm:text-base">
                        {partner.name?.replace(/;/g, "").trim()}
                      </h4>

                      {(partner.tag || partner.city) && (
                        <p className="mt-1 text-[12px] leading-5 text-[#64748B] sm:text-[13px]">
                          {[partner.tag, partner.city]
                            .filter(Boolean)
                            .join(" · ")}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* COLUMN 2 */}
              <div className="border-t border-[#B8C5D1] py-2 sm:border-l sm:border-t-0 sm:pl-6 lg:border-l lg:pl-8 lg:pr-8">
                {columns[1].map((partner, index) => (
                  <div
                    key={`column-2-${partner.name}-${index}`}
                    className="flex items-start gap-3.5 py-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-200 text-sm font-bold text-[#2563EB]">
                      {String(index * 3 + 2).padStart(2, "0")}
                    </div>

                    <div className="min-w-0 flex-1 pt-0.5">
                      <h4 className="break-words text-[15px] font-bold leading-6 text-[#102A43] sm:text-base">
                        {partner.name?.replace(/;/g, "").trim()}
                      </h4>

                      {(partner.tag || partner.city) && (
                        <p className="mt-1 text-[12px] leading-5 text-[#64748B] sm:text-[13px]">
                          {[partner.tag, partner.city]
                            .filter(Boolean)
                            .join(" · ")}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* COLUMN 3 */}
              <div className="border-t border-[#B8C5D1] py-2 lg:border-l lg:border-t-0 lg:pl-8">
                {columns[2].map((partner, index) => (
                  <div
                    key={`column-3-${partner.name}-${index}`}
                    className="flex items-start gap-3.5 py-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-200 text-sm font-bold text-[#2563EB]">
                      {String(index * 3 + 3).padStart(2, "0")}
                    </div>

                    <div className="min-w-0 flex-1 pt-0.5">
                      <h4 className="break-words text-[15px] font-bold leading-6 text-[#102A43] sm:text-base">
                        {partner.name?.replace(/;/g, "").trim()}
                      </h4>

                      {(partner.tag || partner.city) && (
                        <p className="mt-1 text-[12px] leading-5 text-[#64748B] sm:text-[13px]">
                          {[partner.tag, partner.city]
                            .filter(Boolean)
                            .join(" · ")}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* OUR ESTEEMED CLIENTS */}
      <section className="w-full py-8 sm:py-10 lg:py-12">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

          {/* SECTION HEADING */}
          <div className="mb-7 text-left sm:mb-9">
            <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#2563EB] sm:text-[13px]">
              Our Clients
            </p>

            <h2 className="text-2xl font-bold leading-tight tracking-[-0.02em] text-[#102A43] sm:text-3xl lg:text-[34px]">
              Trusted By Leading Clients
            </h2>
          </div>

          {/* TWO CLIENT TABLES */}
          <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-2 lg:gap-7">
            <ClientTable clients={clientsLeft} startIndex={0} />
            <ClientTable clients={clientsRight} startIndex={12} />
          </div>

        </div>
      </section>
    </main>
  );
};

export default ClientsPage;
