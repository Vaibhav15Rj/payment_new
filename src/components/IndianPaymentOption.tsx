import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";

// QR and UPI info
const QR_CODE_URL = "https://placehold.co/300x300/EEF2FF/4F46E5?text=QR+Code";
const UPI_ID = "turtle.ml@axl";

// Bank details
const BANK_DETAILS = {
  accountName: "Mukund Lahoty",
  accountNumber: "50100233410920",
  ifscCode: "HDFC0001098",
  bankName: "HDFC Bank",
};

const IndianPaymentOption = () => {
  const { toast } = useToast();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(fieldName);
      toast({
        title: "Copied to clipboard",
        description: `${fieldName} has been copied.`,
        duration: 2000,
      });

      setTimeout(() => {
        setCopiedField(null);
      }, 2000);
    });
  };

  return (
    <div>
      <Tabs defaultValue="qr" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="qr">QR Code</TabsTrigger>
          <TabsTrigger value="upi">UPI ID</TabsTrigger>
          <TabsTrigger value="bank">Bank Details</TabsTrigger>
        </TabsList>

        {/* QR Code Tab */}
        <TabsContent value="qr" className="space-y-4 min-h-[360px]">
          <div className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-lg shadow-sm border mb-4">
              <img
                src={QR_CODE_URL}
                alt="Payment QR Code"
                className="w-64 h-64 object-cover"
              />
            </div>
            <p className="text-center text-gray-600">
              Scan this QR code with any UPI app to make your payment
            </p>
          </div>
        </TabsContent>

        {/* UPI Tab */}
        <TabsContent value="upi" className="min-h-[360px]">
          <div className="flex flex-col items-center pt-10">
            <div className="bg-payment-light-blue p-6 rounded-lg w-full max-w-md mb-6 text-center">
              <p className="text-lg font-medium mb-2">UPI ID</p>
              <div className="flex items-center justify-center gap-2 p-3 bg-white rounded border">
                <span className="text-xl font-semibold text-payment-blue">
                  {UPI_ID}
                </span>
              </div>
            </div>
            <Button
              onClick={() => copyToClipboard(UPI_ID, "UPI ID")}
              className="flex items-center gap-2"
              variant="outline"
            >
              {copiedField === "UPI ID" ? (
                <>
                  <Check className="h-4 w-4" /> Copied
                </>
              ) : (
                "Copy UPI ID"
              )}
            </Button>
            <p className="mt-6 text-center text-gray-600">
              Open any UPI app and use the above ID to make your payment
            </p>
          </div>
        </TabsContent>

        {/* Bank Details Tab */}
        <TabsContent value="bank" className="space-y-6 min-h-[360px]">
          <div className="bg-payment-light-blue p-6 rounded-lg w-full">
            <h3 className="font-medium text-lg mb-4 text-center">
              Bank Transfer Details
            </h3>

            {/* Account Name */}
            <div className="flex justify-between items-center py-3">
              <div className="text-gray-600">Account Name</div>
              <div className="flex items-center gap-2">
                <span className="font-medium">{BANK_DETAILS.accountName}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-2"
                  onClick={() =>
                    copyToClipboard(BANK_DETAILS.accountName, "Account Name")
                  }
                >
                  {copiedField === "Account Name" ? (
                    <Check className="h-3 w-3 text-payment-success" />
                  ) : (
                    "Copy"
                  )}
                </Button>
              </div>
            </div>
            <Separator />

            {/* Account Number */}
            <div className="flex justify-between items-center py-3">
              <div className="text-gray-600">Account Number</div>
              <div className="flex items-center gap-2">
                <span className="font-medium">{BANK_DETAILS.accountNumber}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-2"
                  onClick={() =>
                    copyToClipboard(BANK_DETAILS.accountNumber, "Account Number")
                  }
                >
                  {copiedField === "Account Number" ? (
                    <Check className="h-3 w-3 text-payment-success" />
                  ) : (
                    "Copy"
                  )}
                </Button>
              </div>
            </div>
            <Separator />

            {/* IFSC Code */}
            <div className="flex justify-between items-center py-3">
              <div className="text-gray-600">IFSC Code</div>
              <div className="flex items-center gap-2">
                <span className="font-medium">{BANK_DETAILS.ifscCode}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-2"
                  onClick={() =>
                    copyToClipboard(BANK_DETAILS.ifscCode, "IFSC Code")
                  }
                >
                  {copiedField === "IFSC Code" ? (
                    <Check className="h-3 w-3 text-payment-success" />
                  ) : (
                    "Copy"
                  )}
                </Button>
              </div>
            </div>
            <Separator />

            {/* Bank Name */}
            <div className="flex justify-between items-center py-3">
              <div className="text-gray-600">Bank Name</div>
              <div className="flex items-center gap-2">
                <span className="font-medium">{BANK_DETAILS.bankName}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-2"
                  onClick={() =>
                    copyToClipboard(BANK_DETAILS.bankName, "Bank Name")
                  }
                >
                  {copiedField === "Bank Name" ? (
                    <Check className="h-3 w-3 text-payment-success" />
                  ) : (
                    "Copy"
                  )}
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
            <p>
              After making the bank transfer, please click the "Payment Completed"
              button below and share the transaction reference number if available.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default IndianPaymentOption;
