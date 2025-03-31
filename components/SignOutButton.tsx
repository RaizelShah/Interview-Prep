"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/actions/auth.action";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut();
        router.push("/sign-in");
    };

    return (
        <Button 
            variant="outline" 
            onClick={handleSignOut}
            className="ml-auto"
        >
            Logout
        </Button>
    );
} 