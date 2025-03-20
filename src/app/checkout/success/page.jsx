"use client";

import Link from "next/link";
import { CheckCircleIcon, DownloadIcon } from "lucide-react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const SuccessOrder = () => {
    const handleDownloadInvoice = () => {
        const pdf = new jsPDF();

        // Invoice Title
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(22);
        pdf.text("Invoice", 105, 20, { align: "center" });

        // Order & Customer Info
        pdf.setFontSize(12);
        pdf.setFont("helvetica", "normal");
        pdf.text("Order ID: #123456", 20, 40);
        pdf.text("Order Date: Feb 19, 2025", 20, 50);
        pdf.text("Customer Name: John Doe", 20, 60);
        pdf.text("Email: johndoe@example.com", 20, 70);

        // Line Separator
        pdf.setLineWidth(0.5);
        pdf.line(20, 75, 190, 75);

        // Invoice Table Data
        const items = [
            ["Item", "Quantity", "Unit Price", "Total"],
            ["Product A", "2", "50.00", "100.00"],
            ["Product B", "1", "24.98", "24.98"],
        ];

        // Generate Table
        autoTable(pdf, {
            startY: 80,
            head: [items[0]], // Table Header
            body: items.slice(1), // Table Content
            theme: "striped",
            styles: { fontSize: 12 },
            headStyles: { fillColor: [44, 62, 80], textColor: 255, fontStyle: "bold" },
            margin: { top: 10 },
        });

        // Total Amount
        const finalY = pdf.lastAutoTable.finalY + 10;
        pdf.setFont("helvetica", "bold");
        pdf.text("Total Amount: 124.98", 150, finalY);

        // Footer Message
        pdf.setFontSize(10);
        pdf.setFont("helvetica", "italic");
        pdf.text("Thank you for your purchase!", 20, finalY + 20);

        // Save PDF
        pdf.save("invoice.pdf");
    };

    return (
        <div className="container">
            <div className="flex items-center justify-center pt-10 pb-28">
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-sm p-8 text-center border border-gray-200 dark:border-gray-700 max-w-lg w-full">

                    {/* Success Icon */}
                    <div className="flex justify-center">
                        <CheckCircleIcon className="text-green-500 w-20 h-20" />
                    </div>

                    {/* Success Message */}
                    <h2 className="text-xl md:text-3xl font-bold text-gray-800 dark:text-white mt-4">
                        Order Placed Successfully!
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                        Thank you for your purchase. You can download your order invoice below.
                    </p>

                    {/* Order Details */}
                    <div className="bg-white dark:bg-gray-800 p-6 mt-6 rounded-sm shadow-md border border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Order Invoice</h3>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">
                            Order ID: <span className="font-semibold">#123456</span>
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                            Total Amount: <span className="font-semibold">৳124.98</span>
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">
                            Order Date: <span className="font-semibold">Feb 19, 2025</span>
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="mt-6 flex flex-col gap-3">
                        <button
                            onClick={handleDownloadInvoice}
                            className="!w-full button flex justify-center items-center gap-1"
                        >
                            <DownloadIcon className="w-5 h-5" /> Download Invoice
                        </button>
                        <Link
                            href="/"
                            className="!w-full !bg-slate-200 !text-dark button flex justify-center items-center gap-1"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessOrder;
