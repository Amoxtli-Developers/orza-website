import React from "react";
import { HoverEffect } from "../HoverEffect/HoverEffect"; // Import HoverEffect correctly

function ClientCard() {
  return (
    <div className="max-w-5xl mx-auto px-3">
      <HoverEffect items={projects} />
    </div>
  );
}

const projects = [
  {
    title: "Ternium",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://mx.ternium.com/es?utm_medium=cpc&utm_source=google&utm_term=ternium&utm_campaign=aw_ternium_brn_think_sem_brand_terms_leads&hsa_acc=5368015878&hsa_cam=15193289641&hsa_grp=128249293566&hsa_ad=646279977323&hsa_src=g&hsa_tgt=kwd-8183071570&hsa_kw=ternium&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQjwiYOxBhC5ARIsAIvdH50WU-ZwIUYxnRKh8NpGsH65c1zPwH2EnNSfUYPbSx_Eskth6vc4NWUaAn25EALw_wcB",
  },
  {
    title: "Harsco",
    description:
      "A global leader in environmental services and products, particularly for the steel and metals industries. They focus on helping these industries manage waste and improve efficiency, all while considering environmental sustainability.",
    link: "https://www.harsco-environmental.com",
  },
  {
    title: "Limser",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://www.limsercranes.com/",
  },
];

export default ClientCard; // Export ClientCard as default
export { projects }; // Also export projects if needed
