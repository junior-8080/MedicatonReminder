import "../globals.css";
import PageLayout from "@/components/core/PageLayout";
import SysAdmin from "@/features/SysAdminPage/SysAdmin";

const page = async () => {
    return (
        <PageLayout>
            <SysAdmin />
        </PageLayout>
    );
};

export default page;
