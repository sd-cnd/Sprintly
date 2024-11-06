"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  OrganizationSwitcher,
  SignedIn,
  useOrganization,
  useUser,
} from "@clerk/nextjs";

const OrgSwitcher = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { isLoaded } = useOrganization();
  const { isLoaded: isUserLoaded } = useUser();
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  if (!isLoaded || !isUserLoaded) {
    return null;
  }

  return (
    <div className="flex justify-end mt-1 rounded-md bg-red-500 font-bold">
      <SignedIn>
        {isClient && (
        <OrganizationSwitcher
          hidePersonal
          createOrganizationMode={
            pathname === "/onboarding" ? "navigation" : "modal"
          }
          afterCreateOrganizationUrl="/organization/:slug"
          afterSelectOrganizationUrl="/organization/:slug"
          createOrganizationUrl="/onboarding"
          appearance={{
            elements: {
              organizationSwitcherTrigger:
                "border border-gray-300 rounded-md px-5 py-2 text-white",
              organizationSwitcherTriggerIcon: "text-white",
            },
          }}
        />
        )}
      </SignedIn>
    </div>
  );
};

export default OrgSwitcher;
