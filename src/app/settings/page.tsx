import "../globals.css";
import type { Metadata } from "next";
import PageLayout from "@/components/core/PageLayout";
import Settings from "@/features/SettingsPage/Settings";


const page = async () => {
    return (
        <PageLayout>
            <Settings />
        </PageLayout>
    );
};

export default page;
