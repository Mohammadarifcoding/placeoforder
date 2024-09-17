import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"

const useGetAccountStatementColumns = () => {



    const columns = [
        {
            id: "select",
            header: ({ table }) => (
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                />
            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            ),
            enableSorting: false,
            enableHiding: false,
        },
        {
            accessorKey: "status",
            header: "Status",
        },
        {
            accessorKey: "email",
            // header: () => <div className="text-center">Email</div>,
            header: ({ column }) => {
                return (
                    <Button
                        className="p-0 font-bold"
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Email
                        <ArrowUpDown className="w-4 h-4 ml-2" />
                    </Button>
                )
            },
            // cell: ({ row }) => <div className="font-medium text-center">{row.getValue("email")}</div>,
        },
        // {
        //     accessorKey: "amount",
        //     header: "Amount",
        // },
        {
            accessorKey: "amount",
            // header: () => <div className="text-center">Amount</div>,
            header: ({ column }) => {
                return (
                    <Button
                        className="p-0 font-bold"
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Amount
                        <ArrowUpDown className="w-4 h-4 ml-2" />
                    </Button>
                )
            },
            cell: ({ row }) => {
                const amount = parseFloat(row.getValue("amount"))
                const formatted = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                }).format(amount)

                return <div className="font-medium">{formatted}</div>
            },
        },
        {
            id: "actions",
            header: () => <div className="font-bold">Action</div>,
            cell: ({ row }) => {
                const payment = row.original

                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="w-8 h-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="w-4 h-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                                onClick={() => navigator.clipboard.writeText(payment.id)}
                            >
                                Copy payment ID
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>View customer</DropdownMenuItem>
                            <DropdownMenuItem>View payment details</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },
    ]

    return { columns }
};

export default useGetAccountStatementColumns;