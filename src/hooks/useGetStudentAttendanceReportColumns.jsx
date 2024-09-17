import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";


const useGetAttendanceReportColumns = () => {



    const columns = [
        {
            accessorKey: "date",
            header: ({ column }) => {
                return (
                    <Button
                        className="p-0 font-bold"
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Date
                        <ArrowUpDown className="w-4 h-4 ml-2" />
                    </Button>
                )
            },
            // header: "Date",
        },
        {
            accessorKey: "day",
            header: "Day",
        },
        {
            accessorKey: "id",
            header: "ID",
        },
        {
            accessorKey: "name",
            header: "Name",
        },
        {
            accessorKey: "status",
            header: "Status",
        },
    ]

    return { columns }
};

export default useGetAttendanceReportColumns;