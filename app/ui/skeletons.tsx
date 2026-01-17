export default function TableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="mb-2 w-full rounded-md bg-white p-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200" />
                    <div className="ml-4 h-6 w-24 rounded bg-gray-200" />
                  </div>
                  <div className="h-6 w-16 rounded bg-gray-200" />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <div className="h-6 w-20 rounded bg-gray-200 mb-2" />
                    <div className="h-4 w-16 rounded bg-gray-200" />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-8 w-8 rounded bg-gray-200" />
                    <div className="h-8 w-8 rounded bg-gray-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="text-left text-sm font-normal text-gray-500">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">Customer</th>
                <th scope="col" className="px-3 py-5 font-medium">Email</th>
                <th scope="col" className="px-3 py-5 font-medium">Amount</th>
                <th scope="col" className="px-3 py-5 font-medium">Date</th>
                <th scope="col" className="px-3 py-5 font-medium">Status</th>
                <th scope="col" className="px-4 py-5 sm:pr-6" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm">
              {[...Array(5)].map((_, i) => (
                <tr key={i} className="group">
                  <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 sm:pl-6">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gray-200" />
                      <div className="h-6 w-24 rounded bg-gray-200" />
                    </div>
                  </td>
                  <td className="whitespace-nowrap bg-white px-4 py-5"><div className="h-6 w-32 rounded bg-gray-200" /></td>
                  <td className="whitespace-nowrap bg-white px-4 py-5"><div className="h-6 w-20 rounded bg-gray-200" /></td>
                  <td className="whitespace-nowrap bg-white px-4 py-5"><div className="h-6 w-24 rounded bg-gray-200" /></td>
                  <td className="whitespace-nowrap bg-white px-4 py-5"><div className="h-6 w-16 rounded bg-gray-200" /></td>
                  <td className="whitespace-nowrap bg-white py-3 pl-3 pr-4 sm:pr-6">
                    <div className="flex justify-end gap-3">
                      <div className="h-8 w-8 rounded bg-gray-200" />
                      <div className="h-8 w-8 rounded bg-gray-200" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function InvoicesTableSkeleton() {
  return <TableSkeleton />;
}

export function RevenueChartSkeleton() {
  return (
    <div className="w-full md:col-span-4">
      <h2 className="mb-4 text-xl md:text-2xl">Recent Revenue</h2>
      <div className="rounded-xl bg-gray-50 p-4">
        <div className="h-[350px] rounded-md bg-white animate-pulse" />
      </div>
    </div>
  );
}

export function LatestInvoicesSkeleton() {
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className="mb-4 text-xl md:text-2xl">Latest Invoices</h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex flex-row items-center justify-between py-4 border-b">
              <div className="flex items-center">
                <div className="mr-4 h-8 w-8 rounded-full bg-gray-200" />
                <div>
                  <div className="h-4 w-32 rounded bg-gray-200 mb-1" />
                  <div className="h-3 w-48 rounded bg-gray-200" />
                </div>
              </div>
              <div className="h-4 w-20 rounded bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <>
      {[...Array(4)].map((_, i) => (
        <div key={i} className="rounded-xl bg-gray-50 p-6">
          <div className="h-6 w-24 rounded bg-gray-200 mb-2" />
          <div className="h-8 w-32 rounded bg-gray-200" />
        </div>
      ))}
    </>
  );
}
