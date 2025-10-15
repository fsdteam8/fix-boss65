import React from "react";
import BookingConfirmation from "./_components/booking-confirmation";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {

 const { id } = await params;


  return (
    <div>
      <BookingConfirmation bookingId={id} />
    </div>
  );
}


// "use client";
// import React from "react";
// import BookingConfirmation from "./_components/booking-confirmation";
// import { usePathname } from "next/navigation";

// export default function Page() {
//   const pathname = usePathname();
//   const id = pathname.replace("/success/", "");
//   return (
//     <div>
//       <BookingConfirmation bookingId={id} />
//     </div>
//   );
// }
