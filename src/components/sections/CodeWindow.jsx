import {
  HiOutlineCloud,
  HiOutlineServer,
  HiOutlineCircleStack,
} from "react-icons/hi2";

export default function CodeWindow() {
  return (
    <div className="hidden w-full max-w-[500px] justify-self-end lg:block">
      {/* Code Editor */}
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-5 py-3">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
            <span className="h-3 w-3 rounded-full bg-green-400"></span>
          </div>

          <span className="text-sm font-medium text-gray-500">
            wallet.controller.js
          </span>
        </div>

        {/* Code */}
        <pre className="max-h-[360px] overflow-hidden bg-slate-950 p-5 text-[12px] leading-6 text-green-300">
          {`router.post("/wallet/transfer",
 verifyToken,
 async (req, res) => {

   const transaction =
     await walletService.transfer({
       amount: req.body.amount
     });

   await sqs.sendMessage({
     transactionId: transaction.id
   });

   return res.json({
     success: true
   });

});`}
        </pre>
      </div>
      {/* Bottom Cards */}
      <div className="mt-5 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="grid grid-cols-3 divide-x divide-gray-200">
          <div className="px-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              EXPERIENCE
            </p>

            <h3 className="mt-3 text-2xl font-bold text-gray-900">10+</h3>

            <p className="mt-2 text-sm text-gray-500">Years</p>
          </div>

          <div className="px-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              INVESTORS
            </p>

            <h3 className="mt-3 text-2xl font-bold text-gray-900">10K+</h3>

            <p className="mt-2 text-sm text-gray-500"> Served</p>
          </div>

          <div className="px-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              TRANSACTIONS
            </p>

            <h3 className="mt-3 text-2xl font-bold text-blue-600">5L+</h3>

            <p className="mt-2 text-sm text-gray-500">Processed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
